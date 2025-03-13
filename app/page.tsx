import Image from "next/image";

export default function Page() {
    return(
    <div>
        <div className="photo-container">
            <Image
                src="/images/ggb-pic.png"
                alt="ggb-photo"
                width={500}
                height={300}
            />
        </div>
    </div>
)}
