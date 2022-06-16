<?php

namespace App\Http\Controllers\Notes;

use App\Models\Note;
use App\Http\Controllers\Controller;
use App\Http\Requests\Notes\StoreNoteRequest;
use App\Http\Requests\Notes\UpdateNoteRequest;
use App\Http\Resources\NoteCollection;
use App\Http\Resources\NoteResource;
use Illuminate\Http\Response;

class NoteController extends Controller
{
    public function index()
    {
        return new NoteCollection(Note::all());
    }

    public function store(StoreNoteRequest $request)
    {
        $note = Note::create($request->validated());

        return new NoteResource($note);
    }

    public function show(Note $note)
    {
        return new NoteResource($note);
    }

    public function update(UpdateNoteRequest $request, Note $note)
    {
        $note->update($request->validated());

        return new NoteResource($note);
    }

    public function destroy(Note $note)
    {
        $note->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
