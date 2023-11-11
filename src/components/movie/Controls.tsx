import { BsFillPlayFill } from "react-icons/bs"

const Controls = () => {
  const buttons = [
    {
      id: 0,
      text: "play",
      icon: <BsFillPlayFill />,
      style:
        "flex items-center justify-between p-2 text-sm font-bold capitalize  bg-white rounded-xl text-black hover:bg-gray-400",
      onclick: () => {},
    },
    {
      id: 1,
      text: "more info",
      icon: "",
      style:
        "p-2 text-sm font-bold capitalize  bg-blue-700 rounded-xl hover:bg-blue-600",
      onclick: () => {},
    },
  ]
  return (
    <div className="flex gap-2">
      {buttons.map((btn) => (
        <button className={btn.style} key={btn.id} onClick={btn.onclick}>
          <span className="mr-2">{btn.icon}</span>
          {btn.text}
        </button>
      ))}
    </div>
  )
}

export default Controls
