const User = require('../models/User');

/**
 * @desc    Update user profile during setup
 * @route   PUT /api/auth/profile-setup
 * @access  Private
 */
const profileSetup = async (req, res) => {
  try {
    const { username, fullName, university, department, degree, year, bio, skills, interests } = req.body;

    // Check username uniqueness if provided
    if (username) {
      const existing = await User.findOne({ username: username.toLowerCase(), _id: { $ne: req.user._id } });
      if (existing) {
        return res.status(400).json({ success: false, message: 'Username is already taken.' });
      }
    }

    const user = await User.findByIdAndUpdate(
      req.user._id,
      {
        username: username?.toLowerCase(),
        fullName,
        university,
        department,
        degree,
        year,
        bio,
        skills: skills || [],
        interests: interests || [],
        isProfileComplete: true,
      },
      { new: true, runValidators: true }
    );

    res.json({
      success: true,
      message: 'Profile updated successfully!',
      user,
    });
  } catch (error) {
    console.error('Profile setup error:', error);
    if (error.code === 11000) {
      return res.status(400).json({ success: false, message: 'Username is already taken.' });
    }
    res.status(500).json({ success: false, message: 'Server error.' });
  }
};

module.exports = { profileSetup };
