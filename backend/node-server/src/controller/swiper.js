const prisma = require("../../prisma/prisma");

const uploadSwiper = async (req, res) => {
  const imagePath = req.file.path.replaceAll("\\", "/"); // For windwos device

  console.log("Image path: ", imagePath);

  try {
    const swiper = await prisma.swiper.create({
      data: {
        image: imagePath,
      },
    });
    if (swiper) {
      return res.status(201).json({ message: "Swiper Added" });
    }
  } catch (error) {
    console.log("Error: ", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const getASwiper = async (req, res) => {
  const id = parseInt(req.params.id);

  try {
    const swiper = await prisma.swiper.findUnique({
      where: {
        id: id,
      },
    });
    if (swiper) {
      return res.status(500).json({ message: "A swiper found", data: swiper });
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const getAllSwiper = async (req, res) => {
  try {
    const swipers = await prisma.swiper.findMany({
      where: { isVisible: true },
      select: {
        id: true,
        image: true,
      },
    });

    return res.status(500).json(swipers);
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const changeVisiblity = async (req, res) => {
  const id = parseInt(req.params.id);

  try {
    const swiper = await prisma.swiper.findFirst({
      where: { id },
    });

    const result = await prisma.swiper.update({
      where: { id },
      data: { isVisible: !swiper.isVisible }, // Update with boolean negation
    });
    if (result) {
      // Success message (optional)
      return res
        .status(200)
        .json({ message: "Visibility Changed successfully" });
    } else {
      // Handle case where swiper not found
      return res.status(404).json({ message: "Swiper not found" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const deleteSwipper = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const swiper = await prisma.swiper.findFirst({
      where: { id: id },
    });
    if (swiper) {
      const swiper = await prisma.swiper.delete({ where: { id: id } });
        return res.status(500).json({ message: "Swiper Deleted" });
    }else{
        return res.status(400).json({ message: "Swiper Not found" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
module.exports = {
  uploadSwiper,
  getASwiper,
  getAllSwiper,
  changeVisiblity,
  deleteSwipper,
};
