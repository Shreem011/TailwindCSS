import logo from './logo.svg';
import flower from '../src/flower.jpg';
import swan from '../src/swan.jpg';
import tiger from '../src/tiger.jpg';
import './App.css';

function App() {
  return (
    <>
    {/* <h1 className="text-3xl font-bold underline">
       hello world
    </h1> */}


    
<div class="p-10 grid grid-cols-3 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-10">
    {/*card 01 */}
    <div className="rounded overflow-hidden shadow-lg">
    <img className="w-full" src={flower} alt='Flower' />
    <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">Flower</div>
    <p className="text-gray-700 text-base">
    “There are always flowers for those who want to see them.”– Henri Matisse
    </p>
    </div>
    <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
    </div>
    </div>
    

{/*card 02 */}
    {/* <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-5"> */}
    <div className="rounded overflow-hidden shadow-lg">
    <img className="w-full" src={swan} alt='Swan' />
    <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">Swan</div>
    <p className="text-gray-700 text-base">
    "Fishes live in the sea, as men do a-land; the great ones eat up the little ones." -William Shakespeare, Writer
    </p>
    </div>
    <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#summer</span>
    </div>
    </div>
    {/* </div> */}

{/*card 03 */}
    {/* <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-5"> */}
    <div className="rounded overflow-hidden shadow-lg">
    <img className="w-full" src={tiger} alt='Tiger' />
    <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">Swan</div>
    <p className="text-gray-700 text-base">
    "If you want to kick the tiger in his back you’d better have a plan for dealing with his teeth." -Tom Clancy
    </p>
    </div>
    <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#summer</span>
    </div>
    </div>
    {/* </div> */}
</div>
    </>
  );
}

export default App;
