
const InfoBar = () => {
    return (
        // Gradient background matching the reference image (Blue -> Purple -> Pink)
        <div className="w-full border-t bg-gradient-to-r from-blue-600 via-purple-400 to-pink-400 border-white/10">
            <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-3 text-black font-semibold text-lg tracking-wide">

                {/* Social Links Section */}
                <div className="flex items-center justify-center py-6 transition-colors cursor-pointer md:border-r border-black/10 hover:bg-white/5">
                    <span>Social: FB . IN . TW . DR</span>
                </div>

                {/* Phone Number Section */}
                <div className="flex items-center justify-center py-6 transition-colors cursor-pointer md:border-r border-black/10 hover:bg-white/5">
                    <span>+1-416-8241228</span>
                </div>

                {/* Email Section */}
                <div className="flex items-center justify-center py-6 transition-colors cursor-pointer hover:bg-white/5">
                    <span>Info@daevnt.org.world</span>
                </div>

            </div>
        </div>
    );
};

export default InfoBar;