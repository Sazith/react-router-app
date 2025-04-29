import React from 'react'
import { useLoaderData } from 'react-router-dom'


 const Github = () => {
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Sazith')
    //         .then(res => res.json())
    //         .then(data => setData(data))
    // }, [])
const data = useLoaderData()
    return (
        <>
            <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Sidebar Profile */}
                <div className="bg-white rounded-xl shadow-md p-4 text-center">
                    <img
                        src={data?.avatar_url}
                        alt="Profile"
                        className="w-32 h-32 rounded-full mx-auto mb-4 border"
                    />
                    <h2 className="text-xl font-bold">{data?.name}</h2>
                    <p className="text-sm text-gray-600">{data?.login}</p>
                    <p className="text-sm text-gray-800 mt-2">
                        {/* Web Developer @ Simec System Ltd <br />
      MERN | Next.js | JavaScript | Bootstrap & Tailwind CSS */}
                        {data?.bio}
                    </p>

                    <div className="mt-4 text-left text-sm text-gray-700 space-y-1">
                        <p><strong>🏢</strong> {data?.company}</p>
                        <p><strong>📍</strong> {data?.location}</p>
                        <p><strong>📧</strong><a href="https://www.linkedin.com/in/sazith-shyonton/" target='_blank'>in/sazith-shyonton-b65751279</a></p>
                        <p><strong>🔗</strong> <a href="https://www.facebook.com/mdsazith.shyonton.7" target='_blank'>md.sazith.shyonton.7</a></p>
                    </div>

                    <div className="mt-4">
                        <h4 className="font-semibold">Achievements</h4>
                        <div className="flex justify-center gap-2 mt-2">
                            <img src="https://github.githubassets.com/assets/pull-shark-default-498c279a747d.png" className="w-8 h-8" />
                            <img src="https://github.githubassets.com/assets/yolo-default-be0bbff04951.png" className="w-8 h-8" />
                            <img src="https://github.githubassets.com/assets/quickdraw-default-39c6aec8ff89.png" className="w-8 h-8" />
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="md:col-span-2 space-y-6">
                    <div className="text-center">
                        <img
                            src="https://readme-typing-svg.herokuapp.com/?font=Righteous&size=35&center=true&vCenter=true&width=500&height=70&duration=4000&lines=Hi+There!+👋;+I'm+Sazith+Shyonton!;"
                            alt="Typing Animation"
                            className="mx-auto"
                        />
                    </div>

                    <p className="text-left mt-4">
                        <img
                            src="https://komarev.com/ghpvc/?username=sazith&label=Profile%20views&color=0e75b6&style=flat"
                            alt="sazith"
                        />
                    </p>

                    <h3 className="text-center text-xl font-semibold mt-4">
                        A passionate software developer from Bangladesh
                    </h3>

                    <div className="text-center mt-6 space-y-2">
                        <p>🔭 I’m currently working on <span className="font-medium">a marketplace</span></p>
                        <p>🌱 I’m currently learning <span className="font-medium">Express.js, MongoDB</span></p>
                        <p>
                            💬 Ask me about <span className="font-medium">Node.js, React, Firebase...</span> or anything{' '}
                            <a
                                href="https://github.com/Sazith/Sazith/issues"
                                className="text-blue-600 underline hover:text-blue-800"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                here
                            </a>
                        </p>
                        <p>⚡ Fun fact <span className="italic">JavaScript: The Never-Ending Puzzle</span></p>
                    </div>

                    <div className="flex justify-center items-center gap-4 mt-6 flex-wrap">
                        <a href="mailto:mdsazithshyonton@gmail.com">
                            <img
                                src="https://img.shields.io/badge/Gmail-333333?style=for-the-badge&logo=gmail&logoColor=red"
                                alt="Gmail"
                            />
                        </a>
                        <a href="https://www.linkedin.com/in/sazith-shyonton/" target="_blank" rel="noopener noreferrer">
                            <img
                                src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"
                                alt="LinkedIn"
                            />
                        </a>
                        <a href="https://www.facebook.com/mdsazith.shyonton.7" target="_blank" rel="noopener noreferrer">
                            <img
                                src="https://img.shields.io/badge/Portfolio-FF5722?style=for-the-badge&logo=todoist&logoColor=white"
                                alt="Portfolio"
                            />
                        </a>
                    </div>

                    <hr className="my-8 border-t border-gray-300" />

                    <h2 className="text-center text-2xl font-bold mb-4">⚒️ Languages-Frameworks-Tools ⚒️</h2>

                    <div className="flex flex-col items-center space-y-4">
                        <img
                            src="https://skillicons.dev/icons?i=react,bootstrap,mui,html,css,vscode,github,figma,tailwind,git,r"
                            alt="Frontend Tools"
                        />
                        <img
                            src="https://skillicons.dev/icons?i=nodejs,python,javascript,typescript,express,firebase,mongodb,c,java,nextjs,mysql,flask"
                            alt="Backend Tools"
                        />
                    </div>

                    <hr className="my-8 border-t border-gray-300" />

                    <div className="flex flex-col lg:flex-row flex-wrap justify-center items-center gap-6 mt-8">
                        <div className='flex gap-5'>
                            {/* Top Languages */}
                            <div className="w-full max-w-md">
                                <img
                                    src="https://github-readme-stats.vercel.app/api/top-langs?username=sazith&show_icons=true&locale=en&layout=compact"
                                    alt="Top Languages"
                                    className="w-full"
                                />
                            </div>

                            {/* GitHub Stats */}
                            <div className="w-full max-w-md">
                                <img
                                    src="https://github-readme-stats.vercel.app/api?username=sazith&show_icons=true&locale=en"
                                    alt="GitHub Stats"
                                    className="w-full"
                                />
                            </div>
                        </div>


                        {/* Streak Stats */}
                        <div className="w-full max-w-2xl">
                            <img
                                src="https://github-readme-streak-stats.herokuapp.com/?user=sazith"
                                alt="GitHub Streak"
                                className="w-full"
                            />
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Github

