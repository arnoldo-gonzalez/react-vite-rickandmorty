export default function Character({character}) {
    const {name, status, species, image, episode: [firstEpisode]} = character
    const statusClass = status === "Dead" ? "red-300" : status === "Alive" ? "green-600" : "slate-300" 
    const firstSeen = firstEpisode.split("/").pop()

    return (
        <article className="flex flex-col w-full bg-blue-700 border-2 border-transparent transition-colors duration-200 hover:border-blue-400">
            <h4 className="text-center text-white text-xl leading-loose">{name}</h4>
            <img src={image} alt={`Image of ${name}`} className="w-full h-auto" />
            <p className="flex flex-col items-center py-3">
                <span className="font-bold">
                    <span className={`px-1.5 border border-transparent border-r-white text-${statusClass}`}>{status}</span>
                    <span className="px-1.5 text-white">{species}</span>
                </span>
                <span>First seen in {firstSeen} episode</span>
            </p>
        </article>
    )
}