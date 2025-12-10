import React from 'react';
import ScrollReveal from './ScrollReveal';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
      {/* Background Decorative Blobs */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-[-20%] left-[20%] w-[500px] h-[500px] bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      
      <div className="max-w-4xl mx-auto px-6 text-center z-10">
        <ScrollReveal>
          <div className="inline-flex items-center space-x-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 mb-8 shadow-sm hover:shadow-md transition-shadow duration-300">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-google-blue opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-google-blue"></span>
            </span>
            <span className="text-xs font-medium text-google-subtext uppercase tracking-wider">
              100% 由 Google Gemini 生成
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-google-text mb-6 leading-tight">
            您的智能 <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-google-blue to-purple-500">
              书签管家
            </span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <p className="text-xl md:text-2xl text-google-subtext mb-10 max-w-2xl mx-auto leading-relaxed">
            告别混乱。从代码编写、UI 设计到扩展逻辑，<br/>
            这一切皆由 <span className="font-semibold text-google-text">Google Gemini</span> 独立完成。
          </p>
        </ScrollReveal>

        <ScrollReveal delay={600}>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="https://github.com/sproutowo/AI-Bookmarks"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-google-blue text-white rounded-full font-medium text-lg shadow-lg hover:shadow-hover hover:-translate-y-1 active:scale-95 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>立即体验</span>
              <i className="fa-solid fa-arrow-right text-sm ml-1"></i>
            </a>
            <a 
              href="#features"
              className="w-full sm:w-auto px-8 py-4 bg-white text-google-text border border-gray-200 rounded-full font-medium text-lg hover:bg-gray-50 hover:border-gray-300 hover:-translate-y-1 active:scale-95 transition-all duration-300"
            >
              了解更多
            </a>
          </div>
        </ScrollReveal>

        {/* Browser Mockup Preview */}
        <ScrollReveal delay={800} className="mt-20">
          <div className="relative rounded-2xl bg-white border border-gray-200 shadow-2xl p-2 md:p-4 max-w-3xl mx-auto rotate-1 hover:rotate-0 transition-transform duration-700">
            {/* Window Controls */}
            <div className="flex items-center space-x-2 mb-4 px-2">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F57] border border-[#E0443E]"></div>
                <div className="w-3 h-3 rounded-full bg-[#FEBC2E] border border-[#D89E24]"></div>
                <div className="w-3 h-3 rounded-full bg-[#28C840] border border-[#1AAB29]"></div>
              </div>
              <div className="flex-1 bg-gray-100 h-8 rounded-md ml-4 flex items-center px-4 text-xs text-gray-400 font-mono">
                <i className="fa-solid fa-lock mr-2 text-gray-300"></i>
                gemini.google.com/ai-bookmarks
              </div>
            </div>
            
            <div className="aspect-[16/9] bg-gray-50 rounded-lg overflow-hidden relative group">
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8 w-full">
                    {/* Background Skeleton Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 opacity-40 blur-[1px]">
                        {[...Array(8)].map((_, i) => (
                           <div key={i} className="h-24 bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center p-4">
                              <div className={`w-8 h-8 rounded-full mb-2 ${['bg-blue-100', 'bg-red-100', 'bg-green-100', 'bg-yellow-100'][i % 4]}`}></div>
                              <div className="w-16 h-2 bg-gray-100 rounded"></div>
                           </div>
                        ))}
                    </div>
                    {/* Active State Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-white/40 backdrop-blur-sm transition-all duration-500 group-hover:bg-white/20">
                        <div className="bg-white px-8 py-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 flex flex-col items-center animate-bounce-subtle">
                            <div className="w-12 h-12 bg-google-blue rounded-full flex items-center justify-center text-white text-xl mb-3 shadow-lg shadow-blue-200">
                                <i className="fa-solid fa-wand-magic-sparkles"></i>
                            </div>
                            <h3 className="text-lg font-bold text-gray-800">正在分类...</h3>
                            <p className="text-gray-500 text-sm mt-1">Gemini 正在整理您的书签库</p>
                        </div>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Hero;