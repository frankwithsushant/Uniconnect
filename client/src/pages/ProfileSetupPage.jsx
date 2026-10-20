import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Logo from '../components/common/Logo';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import API from '../services/api';
import toast from 'react-hot-toast';
import {
  HiOutlineUser,
  HiOutlineAcademicCap,
  HiOutlineTag,
  HiOutlinePencilAlt,
} from 'react-icons/hi';

const ProfileSetupPage = () => {
  const navigate = useNavigate();
  const { user, updateUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: user?.username || '',
    fullName: user?.fullName || '',
    university: user?.university || '',
    department: '',
    degree: '',
    year: '',
    bio: '',
    skills: '',
    interests: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const payload = {
        ...formData,
        skills: formData.skills ? formData.skills.split(',').map((s) => s.trim()).filter(Boolean) : [],
        interests: formData.interests ? formData.interests.split(',').map((s) => s.trim()).filter(Boolean) : [],
        isProfileComplete: true,
      };
      const res = await API.put('/auth/profile-setup', payload);
      if (res.data.success) {
        updateUser(res.data.user);
        toast.success('Profile setup complete!');
        navigate('/home');
      }
    } catch (err) {
      toast.error(err.response?.data?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const handleSkip = () => navigate('/home');

  return (
    <div className="min-h-screen bg-bg py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <Logo size="md" className="justify-center mb-4" />
          <h1 className="text-3xl font-extrabold text-text mb-2">Set Up Your Profile</h1>
          <p className="text-text-secondary">Tell us about yourself so others can find you</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-border p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <Input
                id="username"
                label="Username"
                placeholder="e.g. john_doe"
                icon={HiOutlineUser}
                value={formData.username}
                onChange={handleChange}
              />
              <Input
                id="fullName"
                label="Full Name"
                placeholder="Your full name"
                icon={HiOutlineUser}
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>
            <Input
              id="university"
              label="University"
              placeholder="Your university name"
              icon={HiOutlineAcademicCap}
              value={formData.university}
              onChange={handleChange}
            />
            <div className="grid sm:grid-cols-3 gap-4">
              <Input
                id="department"
                label="Department"
                placeholder="e.g. CSE"
                value={formData.department}
                onChange={handleChange}
              />
              <Input
                id="degree"
                label="Degree"
                placeholder="e.g. B.Tech"
                value={formData.degree}
                onChange={handleChange}
              />
              <Input
                id="year"
                label="Year / Semester"
                placeholder="e.g. 3rd Year"
                value={formData.year}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="bio" className="block text-sm font-medium text-text mb-1.5">
                Bio
              </label>
              <textarea
                id="bio"
                rows={3}
                placeholder="Tell us about yourself..."
                value={formData.bio}
                onChange={handleChange}
                maxLength={500}
                className="w-full px-4 py-3 bg-white border-2 border-border rounded-xl text-text placeholder:text-text-muted/60 transition-all duration-200 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none"
              />
              <p className="text-xs text-text-muted text-right mt-1">{formData.bio.length}/500</p>
            </div>
            <Input
              id="skills"
              label="Skills"
              placeholder="e.g. React, Python, Data Science (comma-separated)"
              icon={HiOutlineTag}
              value={formData.skills}
              onChange={handleChange}
            />
            <Input
              id="interests"
              label="Interests"
              placeholder="e.g. AI, Hackathons, Web Dev (comma-separated)"
              icon={HiOutlinePencilAlt}
              value={formData.interests}
              onChange={handleChange}
            />

            <div className="flex items-center gap-4 pt-4">
              <Button type="submit" variant="primary" size="lg" fullWidth loading={loading}>
                Save Profile
              </Button>
              <Button type="button" variant="ghost" size="lg" onClick={handleSkip}>
                Skip
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileSetupPage;
