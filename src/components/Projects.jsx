'use client';
import React, { useState, useRef, useEffect } from 'react';
import { 
  MapPin, 
  Home, 
  Building2, 
  Car, 
  Trees, 
  Wifi, 
  Dumbbell, 
  ShoppingCart,
  School,
  Hospital,
  Star,
  ArrowRight,
  Filter,
  Grid3X3,
  List,
  Eye,
  Heart,
  Share2,
  IndianRupee,
  Calendar,
  CheckCircle,
  Sparkles,
  TrendingUp,
  Award,
  Users,
  X,
  Phone,
  Mail,
  ChevronLeft,
  ChevronRight,
  Bath,
  Bed,
  Maximize,
  Shield,
  Zap,
  Waves
} from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [likedProjects, setLikedProjects] = useState(new Set());
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Sample projects data with Unsplash images
  const projects = [
    {
      id: 1,
      title: "Luxury Skyline Residences",
      location: "Sector 62, Noida",
      type: "residential",
      status: "ready-to-move",
      price: "₹85 Lakhs - ₹1.2 Cr",
      configuration: "2/3/4 BHK",
      area: "1200-2100 sq.ft",
      possession: "Ready to Move",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop"
      ],
      rating: 4.8,
      reviews: 124,
      featured: true,
      amenities: ["Swimming Pool", "Gym", "Club House", "Kids Play Area", "Power Backup", "Security", "Elevator", "Garden", "Parking"],
      nearby: ["Metro - 500m", "Schools - 1km", "Hospital - 800m", "Mall - 1.2km"],
      description: "Premium residential complex with world-class amenities and excellent connectivity. This luxury project offers spacious apartments with modern interiors, panoramic city views, and top-notch facilities for a comfortable lifestyle.",
      longDescription: "Luxury Skyline Residences represents the pinnacle of modern living in Noida. Strategically located in Sector 62, this premium residential complex offers unparalleled connectivity to major business hubs, educational institutions, and entertainment centers. The project features thoughtfully designed 2, 3, and 4 BHK apartments ranging from 1200 to 2100 square feet, each crafted with attention to detail and modern aesthetics. Residents enjoy access to world-class amenities including a state-of-the-art fitness center, swimming pool, landscaped gardens, and a fully equipped clubhouse. The complex ensures 24/7 security with advanced surveillance systems and power backup facilities.",
      developer: "XYZ Developers",
      sold: 85,
      total: 100,
      launchDate: "January 2020",
      completionDate: "March 2023",
      floors: 25,
      parkingRatio: "1:1",
      rera: "UP-RERA-123456"
    },
    {
      id: 2,
      title: "Corporate Business Hub",
      location: "Sector 18, Noida",
      type: "commercial",
      status: "under-construction",
      price: "₹45 Lakhs - ₹80 Lakhs",
      configuration: "Office Spaces",
      area: "500-1500 sq.ft",
      possession: "Dec 2025",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop"
      ],
      rating: 4.6,
      reviews: 89,
      featured: false,
      amenities: ["Conference Rooms", "High Speed WiFi", "Cafeteria", "Parking", "Power Backup", "Security", "AC", "Reception", "Meeting Rooms"],
      nearby: ["Metro - 200m", "Banks - 300m", "Restaurants - 100m", "Airport - 25km"],
      description: "Modern commercial complex designed for growing businesses and startups with premium office spaces and business facilities.",
      longDescription: "Corporate Business Hub stands as a testament to modern commercial architecture in the heart of Sector 18, Noida. This state-of-the-art commercial complex is designed to cater to the evolving needs of contemporary businesses, startups, and established enterprises. The project offers flexible office spaces ranging from 500 to 1500 square feet, equipped with modern infrastructure and high-speed connectivity. Strategic location ensures excellent accessibility via metro and major road networks. The complex features premium amenities including conference facilities, business lounges, cafeteria, and ample parking space.",
      developer: "ABC Constructions",
      sold: 62,
      total: 80,
      launchDate: "June 2023",
      completionDate: "December 2025",
      floors: 20,
      parkingRatio: "1:2",
      rera: "UP-RERA-234567"
    },
    {
      id: 3,
      title: "Green Valley Villas",
      location: "Greater Noida West",
      type: "residential",
      status: "ready-to-move",
      price: "₹1.5 Cr - ₹2.8 Cr",
      configuration: "3/4 BHK Villas",
      area: "2200-3500 sq.ft",
      possession: "Ready to Move",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop"
      ],
      rating: 4.9,
      reviews: 156,
      featured: true,
      amenities: ["Private Garden", "Car Parking", "Security", "Power Backup", "Clubhouse", "Sports Complex", "Swimming Pool", "Playground", "Landscaping"],
      nearby: ["Schools - 800m", "Hospital - 1.5km", "Shopping - 2km", "Highway - 1km"],
      description: "Luxurious independent villas with private gardens and premium amenities in a serene environment.",
      longDescription: "Green Valley Villas offers an exclusive collection of luxurious independent villas nestled in the tranquil surroundings of Greater Noida West. These premium villas are designed for those who seek privacy, space, and luxury in their living experience. Each villa comes with a private garden, dedicated parking, and spacious interiors ranging from 2200 to 3500 square feet. The gated community ensures complete security and privacy while providing access to world-class amenities including a clubhouse, sports complex, and landscaped gardens.",
      developer: "Green Homes Pvt Ltd",
      sold: 28,
      total: 45,
      launchDate: "September 2019",
      completionDate: "August 2022",
      floors: 2,
      parkingRatio: "2:1",
      rera: "UP-RERA-345678"
    },
    {
      id: 4,
      title: "Tech Park Commercial",
      location: "Sector 135, Noida",
      type: "commercial",
      status: "new-launch",
      price: "₹60 Lakhs - ₹1.2 Cr",
      configuration: "Office Suites",
      area: "800-2000 sq.ft",
      possession: "Mar 2026",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1582653291997-079a1c04e5a1?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1573495612915-f4d96c5b2e5b?w=800&h=600&fit=crop"
      ],
      rating: 4.7,
      reviews: 67,
      featured: false,
      amenities: ["Modern Infrastructure", "Food Court", "Parking", "High Speed Internet", "Conference Halls", "24/7 Security", "Elevators", "Reception", "Business Lounge"],
      nearby: ["Metro - 1km", "IT Hub - 500m", "Restaurants - 200m", "Expressway - 2km"],
      description: "State-of-the-art commercial space in the heart of Noida's tech corridor with modern facilities.",
      longDescription: "Tech Park Commercial is strategically positioned in Sector 135, at the epicenter of Noida's rapidly expanding technology corridor. This cutting-edge commercial development offers premium office suites designed to meet the sophisticated needs of IT companies, startups, and established businesses. The project features modern architecture, smart building technology, and flexible floor plans ranging from 800 to 2000 square feet. With proximity to major IT hubs and excellent connectivity to Delhi and other NCR regions, this development promises to be a landmark commercial destination.",
      developer: "Tech Builders",
      sold: 15,
      total: 60,
      launchDate: "March 2024",
      completionDate: "March 2026",
      floors: 18,
      parkingRatio: "1:1.5",
      rera: "UP-RERA-456789"
    },
    {
      id: 5,
      title: "Riverside Apartments",
      location: "Sector 76, Noida",
      type: "residential",
      status: "under-construction",
      price: "₹65 Lakhs - ₹95 Lakhs",
      configuration: "2/3 BHK",
      area: "1100-1800 sq.ft",
      possession: "Jun 2025",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=800&h=600&fit=crop"
      ],
      rating: 4.5,
      reviews: 98,
      featured: false,
      amenities: ["River View", "Swimming Pool", "Gym", "Landscaped Gardens", "Kids Area", "Jogging Track", "Security", "Parking", "Club House"],
      nearby: ["Metro - 1.2km", "Schools - 600m", "Hospital - 900m", "Market - 800m"],
      description: "Scenic apartments with beautiful river views and modern amenities in a peaceful location.",
      longDescription: "Riverside Apartments offers a unique living experience with stunning river views and modern amenities in Sector 76, Noida. This residential project is designed for those who appreciate natural beauty combined with urban convenience. The apartments range from 1100 to 1800 square feet, featuring contemporary interiors and spacious layouts. Residents can enjoy morning walks along the riverside, evening strolls in landscaped gardens, and access to premium amenities including a swimming pool, gymnasium, and children's play area.",
      developer: "River View Constructions",
      sold: 45,
      total: 120,
      launchDate: "August 2022",
      completionDate: "June 2025",
      floors: 15,
      parkingRatio: "1:1",
      rera: "UP-RERA-567890"
    },
    {
      id: 6,
      title: "Premium Retail Plaza",
      location: "Sector 50, Noida",
      type: "commercial",
      status: "ready-to-move",
      price: "₹35 Lakhs - ₹75 Lakhs",
      configuration: "Retail Shops",
      area: "300-1200 sq.ft",
      possession: "Ready to Move",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop"
      ],
      rating: 4.4,
      reviews: 112,
      featured: true,
      amenities: ["High Footfall Area", "Ample Parking", "Food Court", "ATM", "Security", "Power Backup", "Elevator", "Central AC", "Fire Safety"],
      nearby: ["Metro - 300m", "Residential - 100m", "Banks - 200m", "Bus Stop - 50m"],
      description: "Prime retail spaces in high-footfall commercial area with excellent visibility and connectivity.",
      longDescription: "Premium Retail Plaza is strategically located in the bustling Sector 50 of Noida, offering prime retail opportunities in one of the city's most vibrant commercial areas. This modern retail complex features shops ranging from 300 to 1200 square feet, designed to accommodate various business types from boutique stores to restaurants and service centers. The plaza benefits from high footfall due to its proximity to residential areas, metro station, and major commercial establishments. With excellent visibility from main roads and ample parking facilities, this retail space promises strong business potential.",
      developer: "Retail Developers Ltd",
      sold: 72,
      total: 85,
      launchDate: "February 2021",
      completionDate: "October 2022",
      floors: 4,
      parkingRatio: "1:2",
      rera: "UP-RERA-678901"
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'residential', label: 'Residential', count: projects.filter(p => p.type === 'residential').length },
    { id: 'commercial', label: 'Commercial', count: projects.filter(p => p.type === 'commercial').length },
    { id: 'ready-to-move', label: 'Ready to Move', count: projects.filter(p => p.status === 'ready-to-move').length },
    { id: 'under-construction', label: 'Under Construction', count: projects.filter(p => p.status === 'under-construction').length },
    { id: 'featured', label: 'Featured', count: projects.filter(p => p.featured).length }
  ];

  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'featured') return project.featured;
    return project.type === activeFilter || project.status === activeFilter;
  });

  const toggleLike = (projectId) => {
    const newLiked = new Set(likedProjects);
    if (newLiked.has(projectId)) {
      newLiked.delete(projectId);
    } else {
      newLiked.add(projectId);
    }
    setLikedProjects(newLiked);
  };

  const openProjectDetails = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.gallery.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.gallery.length - 1 : prev - 1
      );
    }
  };

  const getStatusBadge = (status) => {
    const badges = {
      'ready-to-move': { text: 'Ready to Move', color: 'bg-green-100 text-green-700 border-green-200' },
      'under-construction': { text: 'Under Construction', color: 'bg-blue-100 text-blue-700 border-blue-200' },
      'new-launch': { text: 'New Launch', color: 'bg-purple-100 text-purple-700 border-purple-200' }
    };
    const badge = badges[status] || badges['ready-to-move'];
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${badge.color}`}>
        {badge.text}
      </span>
    );
  };

  // Project Details Modal
  const ProjectDetailsModal = ({ project }) => {
    if (!project) return null;

    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl max-w-6xl max-h-[90vh] overflow-y-auto w-full">
          {/* Header */}
          <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center rounded-t-3xl">
            <div>
              <h2 className="text-2xl font-bold text-slate-800">{project.title}</h2>
              <div className="flex items-center space-x-2 text-slate-600 mt-1">
                <MapPin className="w-4 h-4" />
                <span>{project.location}</span>
              </div>
            </div>
            <button
              onClick={closeProjectDetails}
              className="p-2 hover:bg-slate-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Image Gallery */}
          <div className="relative h-96 bg-slate-100">
            <img
              src={project.gallery[currentImageIndex]}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {project.gallery.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                {/* Price and Status */}
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <IndianRupee className="w-6 h-6 text-green-600" />
                      <span className="text-3xl font-bold text-slate-800">{project.price}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      {getStatusBadge(project.status)}
                      {project.featured && (
                        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                          <Star className="w-3 h-3 fill-current" />
                          <span>Featured</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 text-yellow-500">
                    <Star className="w-5 h-5 fill-current" />
                    <span className="text-lg font-medium">{project.rating}</span>
                    <span className="text-slate-600">({project.reviews} reviews)</span>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">About This Project</h3>
                  <p className="text-slate-600 leading-relaxed">{project.longDescription}</p>
                </div>

                {/* Project Details */}
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">Project Details</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-slate-600">Configuration</span>
                        <span className="font-medium">{project.configuration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Area</span>
                        <span className="font-medium">{project.area}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Possession</span>
                        <span className="font-medium">{project.possession}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Total Floors</span>
                        <span className="font-medium">{project.floors}</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-slate-600">Launch Date</span>
                        <span className="font-medium">{project.launchDate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Completion</span>
                        <span className="font-medium">{project.completionDate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Parking Ratio</span>
                        <span className="font-medium">{project.parkingRatio}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">RERA</span>
                        <span className="font-medium text-xs">{project.rera}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Amenities */}
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">Amenities</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {project.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center space-x-2 p-3 bg-blue-50 rounded-xl">
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                        <span className="text-sm text-slate-700">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Location Advantages */}
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">Location Advantages</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {project.nearby.map((location, index) => (
                      <div key={index} className="flex items-center space-x-2 p-3 bg-green-50 rounded-xl">
                        <MapPin className="w-4 h-4 text-green-600" />
                        <span className="text-sm text-slate-700">{location}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Progress */}
                <div className="bg-slate-50 p-6 rounded-2xl">
                  <h4 className="font-semibold text-slate-800 mb-4">Sales Progress</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Units Sold</span>
                      <span>{project.sold}/{project.total}</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full transition-all duration-1000"
                        style={{ width: `${(project.sold / project.total) * 100}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-slate-600 mt-2">
                      {Math.round((project.sold / project.total) * 100)}% sold
                    </p>
                  </div>
                </div>

                {/* Developer Info */}
                <div className="bg-slate-50 p-6 rounded-2xl">
                  <h4 className="font-semibold text-slate-800 mb-4">Developer</h4>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-800">{project.developer}</p>
                      <p className="text-sm text-slate-600">Verified Developer</p>
                    </div>
                  </div>
                </div>

                {/* Contact Actions */}
                <div className="space-y-3">
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2">
                    <Phone className="w-5 h-5" />
                    <span>Call Now</span>
                  </button>
                  <button className="w-full bg-white border-2 border-slate-200 text-slate-700 py-4 px-6 rounded-2xl font-semibold hover:border-blue-300 hover:text-blue-600 transition-all duration-300 flex items-center justify-center space-x-2">
                    <Mail className="w-5 h-5" />
                    <span>Send Enquiry</span>
                  </button>
                  <button className="w-full bg-green-600 text-white py-4 px-6 rounded-2xl font-semibold hover:bg-green-700 transition-all duration-300 flex items-center justify-center space-x-2">
                    <Heart className="w-5 h-5" />
                    <span>Add to Wishlist</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const ProjectCard = ({ project }) => (
    <div 
      className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-white/50"
      onMouseEnter={() => setHoveredProject(project.id)}
      onMouseLeave={() => setHoveredProject(null)}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Overlay Actions */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
          <button 
            onClick={() => openProjectDetails(project)}
            className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
          >
            <Eye className="w-5 h-5" />
          </button>
          <button 
            onClick={() => toggleLike(project.id)}
            className={`backdrop-blur-sm p-3 rounded-full transition-colors ${
              likedProjects.has(project.id) 
                ? 'bg-red-500 text-white' 
                : 'bg-white/20 text-white hover:bg-white/30'
            }`}
          >
            <Heart className="w-5 h-5" />
          </button>
          <button className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors">
            <Share2 className="w-5 h-5" />
          </button>
        </div>

        {/* Status Badge */}
        <div className="absolute top-4 left-4">
          {getStatusBadge(project.status)}
        </div>

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
            <Star className="w-3 h-3 fill-current" />
            <span>Featured</span>
          </div>
        )}

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4">
          <div className="flex justify-between items-center text-white text-sm mb-2">
            <span>Units Sold</span>
            <span>{project.sold}/{project.total}</span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full transition-all duration-1000"
              style={{ width: `${(project.sold / project.total) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Project Details */}
      <div className="p-6">
        {/* Title and Rating */}
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
            {project.title}
          </h3>
          <div className="flex items-center space-x-1 text-yellow-500">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm font-medium text-slate-600">{project.rating}</span>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center space-x-2 text-slate-600 mb-4">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">{project.location}</span>
        </div>

        {/* Configuration and Area */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center space-x-2">
            <Home className="w-4 h-4 text-blue-600" />
            <div>
              <p className="text-xs text-slate-500">Configuration</p>
              <p className="text-sm font-semibold text-slate-800">{project.configuration}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Building2 className="w-4 h-4 text-purple-600" />
            <div>
              <p className="text-xs text-slate-500">Area</p>
              <p className="text-sm font-semibold text-slate-800">{project.area}</p>
            </div>
          </div>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <IndianRupee className="w-5 h-5 text-green-600" />
            <span className="text-lg font-bold text-slate-800">{project.price}</span>
          </div>
          <div className="flex items-center space-x-1 text-slate-500">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">{project.possession}</span>
          </div>
        </div>

        {/* Amenities Preview */}
        <div className="mb-4">
          <p className="text-xs text-slate-500 mb-2">Key Amenities</p>
          <div className="flex flex-wrap gap-1">
            {project.amenities.slice(0, 3).map((amenity, index) => (
              <span key={index} className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs">
                {amenity}
              </span>
            ))}
            {project.amenities.length > 3 && (
              <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded-full text-xs">
                +{project.amenities.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <button 
            onClick={() => openProjectDetails(project)}
            className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <span>View Details</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button className="bg-white border-2 border-slate-200 text-slate-700 py-3 px-6 rounded-2xl font-semibold hover:border-blue-300 hover:text-blue-600 transition-all duration-300">
            Call Now
          </button>
        </div>

        {/* Developer Info */}
        <div className="mt-4 pt-4 border-t border-slate-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <Building2 className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-xs text-slate-500">Developer</p>
                <p className="text-sm font-medium text-slate-700">{project.developer}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs text-slate-500">{project.reviews} Reviews</p>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-3 h-3 ${i < Math.floor(project.rating) ? 'text-yellow-400 fill-current' : 'text-slate-300'}`} 
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="relative py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-teal-200/15 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Our Projects</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Premium Properties Portfolio
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Discover our carefully curated collection of residential and commercial properties, 
            each offering exceptional value and modern amenities.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3">
              {filters.map(filter => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                    activeFilter === filter.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                      : 'bg-white/80 text-slate-700 hover:bg-white hover:shadow-md'
                  }`}
                >
                  {filter.label}
                  <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                    activeFilter === filter.id ? 'bg-white/20' : 'bg-slate-100'
                  }`}>
                    {filter.count}
                  </span>
                </button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center space-x-3">
              <span className="text-slate-600 text-sm">View:</span>
              <div className="flex bg-white/80 rounded-2xl p-1 shadow-md">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-3 rounded-xl transition-all duration-300 ${
                    viewMode === 'grid' 
                      ? 'bg-blue-600 text-white shadow-md' 
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <Grid3X3 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-3 rounded-xl transition-all duration-300 ${
                    viewMode === 'list' 
                      ? 'bg-blue-600 text-white shadow-md' 
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className={`grid gap-8 ${
          viewMode === 'grid' 
            ? 'md:grid-cols-2 lg:grid-cols-3' 
            : 'grid-cols-1 max-w-4xl mx-auto'
        }`}>
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Load More / CTA */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 text-white font-bold py-4 px-8 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-3 mx-auto text-lg">
            <span>View All Projects</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          <p className="text-slate-600 mt-4">
            Can't find what you're looking for? 
            <button className="text-blue-600 font-semibold hover:underline ml-1">
              Contact our experts
            </button>
          </p>
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && <ProjectDetailsModal project={selectedProject} />}
    </section>
  );
};

export default Projects;