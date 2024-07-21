function signupHandler(error) {
  // Check for specific Prisma error codes (e.g., P2002 - Unique constraint violation)
  if (error.code === 'P2002') {
    return { status: 409, message: 'Email already exists!' };
  } else {
    // Handle generic errors (e.g., database connection issues)
    console.error('Error creating user:', error);
    return {
      status: 400,
      message: 'An error occurred during signup. Please try again later.',
    };
  }
}

module.exports = { signupHandler };
