import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCamera } from '@fortawesome/free-solid-svg-icons'
const Profile = () => {
  return (
    <div className="flex justify-center items-center h-screen">
            <div className="flex flex-col justify-start lg:border lg:border-gray-300 lg:shadow-md lg:w-1/4 min-h-[90%]">
                <span className="text-xl p-4">Account Settings</span>
                <div className="border border-gray-200 p-4 rounded">
                    <div className="flex">
                        <div className="flex flex-row items-end relative">
                           <img src="src/assets/girl.png" alt="Profile" />
                           <p className="absolute right-0 rounded-2xl text-sm text-white border bg-[#7B68EE] border-gray-200 w-6 h-6 flex items-center justify-center cursor-pointer"><FontAwesomeIcon icon={faCamera}/></p>
                        </div>
                        <span className="pl-4">
                            <p className="text-lg font-bold">Jane Doe</p>
                            <p className="text-sm">jane.doe@example.com</p>
                        </span>
                    </div>
                    <p className="text-sm py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur earum excepturi nemo delectus autem dolorum nihil deserunt magnam libero ullam.</p>
                </div>
            </div>
        </div>
  )
}
export default Profile
