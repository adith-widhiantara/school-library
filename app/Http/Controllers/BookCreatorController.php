<?php

namespace App\Http\Controllers;

use App\Http\Requests\BookCreator\StoreRequest;
use App\Http\Requests\BookCreator\UpdateRequest;
use App\Http\Services\BookCreatorService;
use App\Models\BookCreator;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Foundation\Application;
use Illuminate\Http\RedirectResponse;

class BookCreatorController extends Controller
{
    private BookCreatorService $bookCreatorService;

    public function __construct(BookCreatorService $bookCreatorService)
    {
        $this->bookCreatorService = $bookCreatorService;
    }

    /**
     * Display a listing of the resource.
     */
    public function index(): View|Application|Factory
    {
        $creators = BookCreator::all();

        return view('book_creators.index', compact('creators'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRequest $request): RedirectResponse
    {
        $this->bookCreatorService->store($request);

        return redirect()
            ->route('book-creators.index')
            ->with('success', 'Book creator created successfully.');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): View|Application|Factory
    {
        return view('book_creators.create');

    }

    /**
     * Display the specified resource.
     */
    public function show(BookCreator $bookCreator): View|Application|Factory
    {
        return view('book_creators.show', compact('bookCreator'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(BookCreator $bookCreator): View|Application|Factory
    {
        return view('book_creators.edit', compact('bookCreator'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRequest $request, BookCreator $bookCreator): RedirectResponse
    {
        $this->bookCreatorService->update($request, $bookCreator);

        return redirect()
            ->route('book-creators.index')
            ->with('success', 'Book creator updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(BookCreator $bookCreator): RedirectResponse
    {
        $this->bookCreatorService->delete($bookCreator);

        return redirect()
            ->route('book-creators.index')
            ->with('success', 'Book creator deleted successfully.');
    }
}
