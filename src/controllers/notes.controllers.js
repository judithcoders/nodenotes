const Note = require('./../models/Note')
const notesCtrl = {};

notesCtrl.renderNoteForm =  (req, res) =>  {
    res.render('notes/new-note');
}

notesCtrl.createNewNote = async (req, res) => {
    const{ title, description } =  req.body;
    const {id} =  req.user;
    const newNote = new Note({title,description, user:id});
    await newNote.save();
    req.flash('success_msg', 'Note Added Successfully')
    res.redirect('/notes');
} 

notesCtrl.renderNotes = async (req, res) => {
   const notes = await Note.find({user: req.user.id});
   res.render('notes/all-notes', { notes });
} 

notesCtrl.renderEditForm = async (req,res) => {
    const note = await Note.findById(req.params.id);
    if(note.user != req.user.id){
        req.flash('error_msg','Not Autorized')
        return  res.redirect('/notes');
    }
    res.render('notes/edit-note', { note });
}

notesCtrl.updateNote = async (req, res) => {
    const {title,description} =  req.body;
    await Note.findByIdAndUpdate(req.params.id, {title, description});
    req.flash('success_msg','Note Update Successfully')
    res.redirect('/notes');
}

notesCtrl.deleteNote = async (req, res) => {
    await Note.findByIdAndDelete(req.params.id)
    req.flash('success_msg','Note Deleted Successfully')
    res.redirect('/notes');
} 

module.exports = notesCtrl;