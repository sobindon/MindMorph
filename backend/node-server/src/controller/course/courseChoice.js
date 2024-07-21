const prisma = require('../../../prisma/prisma');

const getLatestCourse = async (req, res) => {
  try {
    const { qty = 2, sort = 'latest' } = req.query;

    // Assuming you have a Course model in your Prisma schema
    const courses = await prisma.course.findMany({
      take: parseInt(qty), // Limit the number of courses
      orderBy: { createdAt: sort === 'latest' ? 'desc' : 'asc' }, // Sort by createdAt field
      select: {
        id: true,
        title: true,
        thumbnail: true,
        rating: true,
        price: true,
      },
    });

    res.json(courses);
  } catch (error) {
    console.error('Error fetching courses:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getTrendingCourse = async (req, res) => {
  try {
    const { qty = 2 } = req.query;

    // Fetching top-rated products
    const topRatedProducts = await prisma.course.findMany({
      take: parseInt(qty), // Limit the number of products
      orderBy: { rating: 'desc' }, // Sort by rating in descending order
      select: {
        id: true,
        title: true,
        thumbnail: true,
        rating: true,
        price: true,
      },
    });

    res.json(topRatedProducts);
  } catch (error) {
    console.error('Error fetching top-rated products:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getLatestCourse,
  getTrendingCourse,
};
