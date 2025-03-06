export default function HeroGradient() {
  return (
    <>
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-green-500/20 via-blue-500/10 to-transparent"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-400/20 rounded-full blur-[100px]"></div>
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-blue-500/20 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-black to-transparent"></div>
    </>
  )
}

