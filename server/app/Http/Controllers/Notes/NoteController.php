<?php

namespace App\Http\Controllers\Notes;

use App\Models\Note;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreNoteRequest;
use App\Http\Requests\UpdateNoteRequest;

class NoteController extends Controller
{
    public function index()
    {
        return Note::all();
    }

    public function store(StoreNoteRequest $request)
    {
        $note = Note::create($request->validated());

        return $note;
    }

    public function show(Note $note)
    {
        //
    }

    public function update(UpdateNoteRequest $request, Note $note)
    {
        //
    }

    public function destroy(Note $note)
    {
        //
    }
}
