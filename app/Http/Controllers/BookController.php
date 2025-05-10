<?php

namespace App\Http\Controllers;

use App\Http\Requests\Book\StoreRequest;
use App\Http\Requests\Book\UpdateRequest;
use App\Http\Services\BookService;
use App\Models\Book;
use App\Models\BookCreator;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Foundation\Application;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class BookController extends Controller
{
    private BookService $bookService;

    public function __construct(BookService $bookService)
    {
        $this->bookService = $bookService;
    }

    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $books = Book::query()
            ->with(['creator'])
            ->orderBy('created_at', 'desc')
            ->get();

        return Inertia::render('Books/Index', [
            'books' => $books,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRequest $request): RedirectResponse
    {
        $this->bookService->store($request);

        return redirect()
            ->route('books.index')
            ->with('success', 'Book created successfully.');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): View|Application|Factory
    {
        $creators = BookCreator::all();

        return view('books.create', compact('creators'));
    }

    /**
     * Display the specified resource.
     */
    public function show(Book $book): Response
    {
        $book->load(['creator']);

        return Inertia::render('Books/Show', [
            'book' => $book,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Book $book): Response
    {
        $book->load(['creator']);

        $creators = BookCreator::query()
            ->pluck('name')
            ->toArray();

        return Inertia::render('Books/Edit', [
            'book' => $book,
            'creators' => $creators,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRequest $request, Book $book): RedirectResponse
    {
        $this->bookService->update($request, $book);

        return redirect()
            ->route('books.index')
            ->with('success', 'Book updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Book $book): RedirectResponse
    {
        $this->bookService->delete($book);

        return redirect()
            ->route('books.index')
            ->with('success', 'Book deleted successfully.');
    }
}
