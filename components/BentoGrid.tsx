import React from 'react';
import ScrollReveal from './ScrollReveal';

const BentoGrid: React.FC = () => {
  return (
    <section id="features" className="pt-24 pb-16 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-google-text mb-6 tracking-tight">
              智能重塑书签体验
            </h2>
            <p className="text-xl text-google-subtext max-w-2xl mx-auto leading-relaxed">
              利用 Google 先进的 AI 模型，为您带来前所未有的整理效率。
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          
          {/* Feature 1: Auto Classification (Large) */}
          <ScrollReveal delay={100} className="md:col-span-2 row-span-1 md:row-span-2">
            <div className="h-full bg-white rounded-3xl p-8 md:p-12 shadow-soft hover:shadow-hover hover:scale-[1.01] transition-all duration-500 relative overflow-hidden group border border-gray-100">
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-google-blue text-2xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                    <i className="fa-solid fa-layer-group"></i>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">AI 自动分类</h3>
                  <p className="text-google-subtext text-lg leading-relaxed max-w-md">
                    不再需要手动拖拽。扩展程序会自动分析网页内容，利用 Gemini 的语义理解能力，将书签精准归类到最合适的文件夹中。
                  </p>
                </div>
                <div className="mt-8 flex gap-3 flex-wrap">
                    <span className="px-4 py-1.5 bg-gray-50 border border-gray-100 rounded-full text-sm text-gray-600 group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:border-blue-100 transition-colors duration-300">#开发文档</span>
                    <span className="px-4 py-1.5 bg-gray-50 border border-gray-100 rounded-full text-sm text-gray-600 group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:border-blue-100 transition-colors duration-300 delay-75">#设计灵感</span>
                    <span className="px-4 py-1.5 bg-gray-50 border border-gray-100 rounded-full text-sm text-gray-600 group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:border-blue-100 transition-colors duration-300 delay-150">#AI 论文</span>
                </div>
              </div>
              <div className="absolute right-[-20px] bottom-[-20px] w-64 h-64 bg-blue-50 rounded-full opacity-50 blur-3xl group-hover:bg-blue-100 transition-colors duration-500"></div>
            </div>
          </ScrollReveal>

          {/* Feature 2: Semantic Filtering */}
          <ScrollReveal delay={200} className="md:col-span-1 row-span-1">
            <div className="h-full bg-white rounded-3xl p-8 shadow-soft hover:shadow-hover hover:scale-[1.02] transition-all duration-300 flex flex-col relative overflow-hidden group border border-gray-100">
              <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center text-google-green text-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <i className="fa-solid fa-filter"></i>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">语义化筛选</h3>
              <p className="text-google-subtext mb-4 text-sm leading-relaxed">
                "找一下上周存的那个关于 React 的教程。" 智能识别您的查找意图。
              </p>
              <div className="mt-auto bg-gray-50 rounded-xl p-3 border border-gray-100 group-hover:border-green-100 transition-colors duration-300">
                <div className="flex items-center gap-2 mb-2">
                   <div className="w-2 h-2 rounded-full bg-gray-300 group-hover:bg-green-400 transition-colors"></div>
                   <div className="h-2 w-3/4 bg-gray-200 rounded"></div>
                </div>
                <div className="flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                   <div className="h-2 w-1/2 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Feature 3: Privacy First */}
          <ScrollReveal delay={300} className="md:col-span-1 row-span-1">
            <div className="h-full bg-white rounded-3xl p-8 shadow-soft hover:shadow-hover hover:scale-[1.02] transition-all duration-300 flex flex-col group border border-gray-100">
              <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center text-google-red text-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <i className="fa-solid fa-shield-halved"></i>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">隐私优先</h3>
              <p className="text-google-subtext text-sm leading-relaxed">
                您的数据仅用于分类处理。我们采用 Google 的安全标准，确保您的浏览习惯绝不外泄。
              </p>
            </div>
          </ScrollReveal>

           {/* Feature 4: Gemini Native */}
           <ScrollReveal delay={400} className="md:col-span-1 row-span-1">
            <div className="h-full bg-[#4285F4] rounded-3xl p-8 shadow-soft hover:shadow-lg hover:scale-[1.02] transition-all duration-300 flex flex-col text-white relative overflow-hidden group">
               <div className="absolute top-[-10%] right-[-10%] p-8 opacity-10 transform group-hover:rotate-12 group-hover:opacity-20 transition-all duration-500">
                    <i className="fa-brands fa-google text-9xl"></i>
               </div>
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white text-xl mb-4 group-hover:bg-white/30 transition-colors">
                <i className="fa-solid fa-code"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Gemini 原生</h3>
              <p className="text-blue-100 text-sm leading-relaxed relative z-10">
                不仅是功能。本页面的每一行代码、每一个样式，均由 Gemini 编写。
              </p>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};

export default BentoGrid;