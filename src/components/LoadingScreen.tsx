import logo from "../assets/PC-Logo (1).png"; 

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-50 via-white to-orange-50 z-50 flex items-center justify-center">
      <div className="text-center space-y-6">
        {/* Logo Image */}
        <div className="flex justify-center animate-pulse">
          <img 
            src={logo} 
            alt="Prayer Cruise Logo" 
            className="w-32 h-32 object-contain"
          />
        </div>
        
        {/* Spinner */}
        <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
        
        {/* Text */}
        <p className="text-gray-600 text-sm">Loading Prayer Cruise...</p>
      </div>
    </div>
  );
}