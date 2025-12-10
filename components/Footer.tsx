import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      {/* Call to Action Section */}
      <div className="py-24 px-6 text-center bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-google-text mb-6 tracking-tight">
              准备好升级您的收藏习惯了吗？
            </h2>
            <p className="text-lg text-google-subtext mb-10 leading-relaxed">
              立即前往 GitHub 获取 AI Bookmarks，让 Gemini 帮您打理繁杂的数字生活。<br className="hidden md:block"/>
              开源、免费，且完全由 AI 构建。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="https://github.com/sproutowo/AI-Bookmarks"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 bg-google-blue text-white rounded-full font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 active:scale-95 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <i className="fa-brands fa-github text-xl"></i>
                <span>获取扩展程序</span>
              </a>
            </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="bg-gray-50 pt-16 pb-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
            
            {/* Brand Column */}
            <div className="max-w-md">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 rounded-lg bg-google-blue flex items-center justify-center text-white">
                  <i className="fa-solid fa-bookmark text-sm"></i>
                </div>
                <span className="text-xl font-medium tracking-tight text-gray-800">AI Bookmarks</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                一个完全由 Google Gemini 设想、设计和编写代码的 Chrome 扩展项目。展示了 AI 在现代软件开发全流程中的潜力。
              </p>
              <div className="flex space-x-4">
                <a href="https://github.com/sproutowo/AI-Bookmarks" className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-google-blue hover:text-white hover:border-google-blue transition-all">
                  <i className="fa-brands fa-github text-sm"></i>
                </a>
              </div>
            </div>

            {/* Legal Column */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wider md:text-right">法律</h4>
              <ul className="space-y-3 text-sm text-gray-600 md:text-right">
                <li><a href="#" className="hover:text-google-blue transition-colors">隐私政策</a></li>
                <li><a href="#" className="hover:text-google-blue transition-colors">开源协议</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
            <p className="mb-4 md:mb-0">© 2024 AI Bookmarks. Open Source under MIT License.</p>
            <div className="flex items-center space-x-1 bg-white px-3 py-1 rounded-full border border-gray-200 shadow-sm">
              <span>Made with</span>
              <i className="fa-solid fa-heart text-red-400 text-[10px]"></i>
              <span>by</span>
              <span className="font-medium text-google-blue">Gemini</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;