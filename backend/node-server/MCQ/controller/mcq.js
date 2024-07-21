const MCQ = require('../models/mcq')
const {mcqValidationSchema,mcqUpdateValidationSchema} = require('../validator/mcq')


const createMcq = async(req,res)=>{
  const { error,value } = mcqValidationSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });
  try {
    const newMCQ = new MCQ({
      lectureId: value.lectureId,
      time: value.time,
      question: value.question,
      option1: value.option1,
      option2: value.option2,
      option3: value.option3,
      option4: value.option4,
      answer: value.answer
    });
    const savedMCQ = await newMCQ.save();
    res.status(201).json(savedMCQ);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

const getMcqByLectureId = async(req,res)=>{
  const lectureId = req.params.id
  try{
    const mcqs = await MCQ.find({
      lectureId:lectureId
    })
    res.json(mcqs)
    if(!mcqs){
      res.status(500).json({ message: "No MCQs found for given lectureID" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

const updateMcq = async(req,res)=>{
  
  // Validate the request body
  const { error,value } = mcqUpdateValidationSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  try {
    const updatedMCQ = await MCQ.findByIdAndUpdate(
      value.mcqId,
      {
        lectureId: value.lectureId,
        time: value.time,
        question: value.question,
        option1: value.option1,
        option2: value.option2,
        option3: value.option3,
        option4: value.option4,
        answer: value.answer
      },
      { new: true }
    );
    if (!updatedMCQ) return res.status(404).json({ message: 'MCQ not found' });
    res.json(updatedMCQ);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

const deleteMcq = async(req,res)=>{
  const mcqId = req.params.id
  try {
    const deletedMCQ = await MCQ.findByIdAndDelete(mcqId);
    if (!deletedMCQ) return res.status(404).json({ message: 'MCQ not found' });
    res.json({ message: 'MCQ deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports = {createMcq,getMcqByLectureId,updateMcq,deleteMcq}