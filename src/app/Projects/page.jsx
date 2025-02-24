import ProjectPane from "@/components/Projects/ProjectPane";
const Page = ({}) => {
    return (
        <div>
            <ProjectPane 
            title={"BumbyBot"} 
            duration={"08/24 - 09/24"} 
            desc={"A discord bot designed to bring the Rust+ app's functionality to discord!"}
            url={"https://github.com/DuncanLynch/BumbyBot"} 
            img={"/BUMBYBOT.png"}
            />
        </div>
    );
}

export default Page;