
import androidImg from '../../assets/images/android-logo.svg'
import iphoneImg from '../../assets/images/Apple_logo_black.svg.png'
import airplane from '../../assets/images/Airplane Silhouette Green.svg'
import house from '../../assets/images/house.png'


export default function MainPage() {

    return <section className="flex flex-col items-center gap-4">
        <h1 className="mt-2 max-w-3/4 text-3xl text-center font-bold">Less stress when sharing expenses <span className='text-red-800'>with your partner</span> </h1>
        <ul className="max-w-3/4 flex gap-4 justify-around">
            <li><img src={airplane} className='max-w-10'></img></li>
            <li><img src={house} className='max-w-10'></img></li>
            <li><img src=''></img></li>
            <li><img></img></li>
        </ul>
        <img src={airplane} className='min-h-1/2 max-w-2/5'></img>
        <a href='' className='bg-red-800 rounded-md text-white py-3 px-6 shadow-black shadow-xs'>Download the app</a>
        <p className="max-w-3/4 text-center font-medium">Keep track of your shared expenses and balances with housemates, trips,groups,friends and family.</p>
        <p className='max-w-3/4 font-medium flex gap-1 items-center'> Free for 
            <a className='flex items-center gap-1'><img src={iphoneImg} alt='iphone' className='h-4 m-0 inline-block'></img>iPhone, </a> 
            <a className='flex items-center gap-1'><img alt='android' className='h-4 inline-block m-0' src={androidImg}></img>Android,</a>
            and web.
        </p>
    </section>    

}