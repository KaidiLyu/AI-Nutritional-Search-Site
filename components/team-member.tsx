import Image from "next/image"

interface TeamMemberProps {
  name: string
  email: string
  image: string
}

export default function TeamMember({ name, email, image }: TeamMemberProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-40 h-40 rounded-full overflow-hidden mb-4 border-2 border-white/10 p-1 bg-gradient-to-r from-green-400 to-blue-500">
        <div className="w-full h-full rounded-full overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            width={200}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <h3 className="text-lg font-bold">{name}</h3>
      <p className="text-gray-400 text-sm">{email}</p>
    </div>
  )
}

