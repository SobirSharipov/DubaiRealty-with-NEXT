import img from '../../public/img1.svg'
import img1 from '../../public/img1 (3).png'
import Image from "next/image";
import img2 from '../../public/img1 (1).png'
import img3 from '../../public/img1 (4).png'
import img4 from '../../public/img1 (5).png'
import img5 from '../../public/img1 (6).png'
import img6 from '../../public/img1 (7).png'
import img7 from '../../public/img1 (8).png'
import img8 from '../../public/img1 (9).png'
import img9 from '../../public/img1 (10).png'
import img10 from '../../public/img1 (11).png'
import img11 from '../../public/img1 (12).png'
import img12 from '../../public/img1 (13).png'
import img13 from '../../public/img1 (14).png'
import Acardion from '@/component/Acardion';

export default function Home() {
  return (
    <div>
      <div>
        <div className='absolute z-10 lg:w-[70%] w-[40%] ml-[60px] mt-[30px] lg:mt-[200px] lg:ml-[300px] flex  items-center'>
          <div>
            <Image src={img1} alt='test' />
          </div>
          <div>
            <p className='lg:my-[20px] lg:block hidden'>Lorem ipsum</p>
            <p className='lg:my-[20px] text-2xl font-bold lg:text-7xl'>Welcome home <br /> <span className='text-yellow-600'>to</span>  luxury</p>
            <p className='lg:my-[20px] lg:block hidden'>Book a consultation</p>
          </div>
        </div>
        <Image src={img} alt='main' />
      </div>

      <div>
        <div className='flex justify-around items-center my-[30px]'>
          <p className='font-bold text-5xl'>Latest projects</p>
          <div className='lg:flex hidden gap-[30px] font-bold'>
            <p className='hover:text-yellow-600 cursor-pointer'>All</p>
            <p className='hover:text-yellow-600 cursor-pointer'>Building</p>
            <p className='hover:text-yellow-600 cursor-pointer'>Interior</p>
            <p className='hover:text-yellow-600 cursor-pointer'>View all projects</p>
          </div>
        </div>
        <div className='grid lg:grid-cols-4 gap-[30px] w-[95%] mx-auto my-[30px]'>
          <div>
            <Image src={img3} alt='test' />
          </div>
          <div className='bg-[#FCD54C] p-[20px] text-black'>
            <p className='font-bold text-3xl mb-[100px]'>Dubai</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat molestie integer aliquam consectetur. Faucibus vitae dui massa tellus magna sit.</p>
            <p className='font-bold text-2xl mt-[70px]'>See project</p>
          </div>
          <div>
            <Image src={img4} alt='test' />
          </div>
          <div>
            <Image src={img2} alt='test' />
          </div>
        </div>
        <div className='lg:flex hidden justify-center gap-[20px]'>
          <div className='w-[20px] h-[20px] rounded-full bg-white'></div>
          <div className='w-[20px] h-[20px] rounded-full bg-yellow-600'></div>
          <div className='w-[20px] h-[20px] rounded-full bg-white'></div>
          <div className='w-[20px] h-[20px] rounded-full bg-white'></div>
        </div>
        <div className='lg:w-[50%] w-[95%] my-[30px] mx-auto'>
          <p className='font-bold text-yellow-500'>Our expertise</p>
          <p className='font-bold text-4xl my-[20px]'>"The best apartment in Dubai" we will find your dream</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse nibh massa, euismod ut libero id, blandit posuere augue.
            Morbi porta volutpat diam egestas ultrices. Phasellus tempus fringilla neque,
            nec viverra orci tristique vel. In efficitur vehicula magna, varius pellentesque nisl vehicula vel.
            Aenean vel sem ac elit commodo finibus in nec massa. Nulla facilisi. Nulla vestibulum venenatis sollicitudin.
            Etiam auctor mollis justo eu tincidunt. Aliquam varius varius tortor. Cras id venenatis sem. Quisque ut risus ex.
            Sed et tempor massa. Praesent ac eros hendrerit, congue justo ac, molestie urna. Fusce nec neque vitae dolor dapibus elementum.
            Maecenas nec orci quis sem condimentum dapibus varius a lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className='w-[95%] mx-auto my-[30px]'>
          <Image src={img5} alt='test' />
        </div>
      </div>

      <div>
        <div className='lg:w-[40%] w-[90%] mx-auto my-[30px] border border-yellow-600 p-[20px] rounded'>
          <p>“Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.” <span className='text-yellow-500'>— Mary Kay Ash</span></p>
        </div>
        <div className='lg:flex grid  justify-center gap-[30px] w-[80%] mx-auto my-[50px]'>
          <div>
            <Image src={img7} alt='test' />
            <p className='mt-[20px]'>Sed in sem pellentesque, eleifend erat vitae, tincidunt turpis. Pellentesque augue elit,
              rutrum sit amet commodo vel, porta quis purus. Nullam faucibus, odio eu bibendum auctor,
              eros dolor aliquet purus, sit amet pellentesque neque est id tortor. In egestas, erat a dapibus dapibus,
              mi augue ornare lorem, nec pretium ligula purus nec tellus. Aenean a scelerisque nisi. Nullam pretium fermentum nunc,
              feugiat placerat urna rutrum eget. Nullam mattis justo consequat risus. Donec imperdiet enim id efficitur pharetra.
              Nam sollicitudin at est eget auctor. Ut sed ante quis nulla tincidunt auctor. Quisque accumsan pretium tincidunt.
              Etiam viverra ultrices est vitae suscipit. Pellentesque elementum purus non nisl pharetra consequat. Nunc in venenatis orci.</p>
          </div>
          <div>
            <Image src={img6} alt='test' />
            <p className='mt-[10px]'>Vivamus non diam vel lorem efficitur mattis in gravida ante. Ut ullamcorper dapibus ante, eu tincidunt orci feugiat vel.
              Curabitur eget lectus lectus. Pellentesque malesuada, felis at accumsan interdum, nisl mi fermentum est,
              eu suscipit dui lorem a dui. Aliquam rhoncus risus in leo vestibulum efficitur.
              Suspendisse tortor quam, faucibus a lacinia a, bibendum vitae quam. Suspen disse et metus et orci rutrum dictum eu eu nibh.
              Suspendisse blandit in diam in rhoncus. Nam volutpat hendrerit enim, sed aliquet quam gravida at.
              Nullam dictum sagittis nisi, eu porta sem mollis eu. Nulla faucibus sed ipsum sed sodales.
              Curabitur varius iaculis felis, in aliquet sem suscipit quis. Ut vulputate, magna ac bibendum elementum,
              nulla magna tincidunt urna, a venenatis dolor arcu sed leo. </p>
          </div>
        </div>
        <div>
          <div className='absolute z-10 text-black w-[100%] text-center lg:mt-[30px]'>
            <p className='lg:block hidden'>Do you have any questions?</p>
            <p className='font-bold lg:text-5xl'>Contact us</p>
            <div className='flex  justify-center gap-[10px] lg:mt-[30px]'>
              <input className=' lg:p-[15px] p-[10px] lg:w-[25%] bg-white rounded ' type="text" placeholder='Enter your mail' />
              <button className='lg:p-[15px] p-[10px] bg-black text-white lg:w-[10%] rounded cursor-pointer'>Send</button>
            </div>
          </div>
          <Image src={img8} alt='test' />
        </div>
      </div>

      <div>
        <div className='flex justify-around items-center my-[40px]'>
          <p className='font-bold text-2xl lg:text-5xl'>Useful articles</p>
          <p className='flex gap-[10px] cursor-pointer hover:text-yellow-600'>View all articles
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </p>
        </div>
        <div className='grid lg:grid-cols-3 w-[80%] mx-auto gap-[30px]'>
          <div>
            <Image src={img10} alt='test' />
          </div>
          <div className='border border-yellow-600 p-[20px] rounded'>
            <p>Jule 03, 2022</p>
            <p className='font-bold text-4xl my-[30px]'>Discover Architecture</p>
            <p>Projects for many large domestic and foreign corporations, enterprises in many elds such</p>
            <p className='flex gap-2 hover:text-yellow-600 cursor-pointer mt-[40px] '>Learn more
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </p>
          </div>
          <div>
            <Image src={img9} alt='test' />
          </div>
        </div>
      </div>

      <div className='w-[80%] mx-auto grid lg:grid-cols-2 gap-[60px] lg:gap-[30px] my-[100px]'>
        <div className='border border-amber-600 rounded p-[20px]'>
          <Image src={img13} alt='test' className='mt-[-70px]'/>
          <div className='flex justify-between mt-[50px] font-bold text-3xl'>
          <p>Paul</p>
          <Image src={img11} alt='test'/>
          </div>
          <p className='text-yellow-600'>Owner in Paul.com</p>
          <p>Projects for many large domestic and foreign corporations, enterprises in many elds such as nance, banking, F&B, education, communication.</p>
        </div>
        <div className='border border-amber-600 rounded p-[20px]'>
          <Image src={img12} alt='test'className='mt-[-70px]'/>
          <div className='flex justify-between items-center font-bold text-3xl mt-[50px]'>
          <p>Robert</p>
          <Image src={img11} alt='test'/>
          </div>
          <p className='text-yellow-600'>Founder in Apple inc.</p>
          <p>Founded in 2007, Sparch is specializing in providing innovative services such as website design, brand identity and marketing</p>
        </div>
      </div>
      <div className='lg:w-[80%] w-[95%] mx-auto my-[50px]'>
      <p className='font-bold text-7xl my-[30px]'>FAQ</p>
      <Acardion/>
      </div>
    </div>
  );
}
