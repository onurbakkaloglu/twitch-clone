import SelectorCards from "pages/Home/components/SelectorCards";
import DirectoryNavbar from "./components/DirectoryNavbar";

export default function Directory() {
    return (
        <main className="flex-auto overflow-auto mx-12">
            <h1 className="text-white font-bold text-5xl">Browse</h1>

            <SelectorCards />

            <DirectoryNavbar/>

        </main>
    )
}