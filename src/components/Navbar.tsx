import Icon from "@/components/ui/icon"

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800 bg-[#09090B]/80 backdrop-blur-md">
      <div className="w-full flex justify-center px-6 py-4">
        <div className="w-full max-w-4xl flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="MessageCircle" className="w-5 h-5 text-indigo-400" />
            <span className="text-white font-semibold">Vibe</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">
              Возможности
            </a>
            <a href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">
              Боты
            </a>
            <a href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">
              Безопасность
            </a>
            <a href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">
              Скачать
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">
              Войти
            </a>
            <a
              href="#"
              className="text-sm text-white bg-indigo-600 hover:bg-indigo-500 px-3.5 py-1.5 rounded-md transition-colors"
            >
              Скачать
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}