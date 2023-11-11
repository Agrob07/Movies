const Controls = () => {
  const buttons = [
    {
      id: 0,
      text: "play",
      icon: "#",
      style:
        "p-2 text-sm font-bold capitalize border-2 bg-white rounded-xl text-black",
      onclick: () => {},
    },
    {
      id: 1,
      text: "more info",
      icon: "",
      style: "p-2 text-sm font-bold capitalize border-2 bg-blue-500 rounded-xl",
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
