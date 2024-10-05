import {GitButton, InstButton, LinkButton} from '../components/linksButton';

export default function Home(){
    return(
        <body className="">
            <section className="text-white flex flex-col p-14 lg:pl-32 leading-tight">
                <div className='flex flex-col lg:flex-row lg:items-center lg:gap-2 gap-0'>
                    <h1 className="font-bold md:text-[100px] text-[50px]">Hi! I'm</h1>
                    <h1 className="text-[#3523FF] font-bold lg:text-[100px] text-[80px]">Hiroshi</h1>
                </div>
                <h3 className="font-semibold lg:text-[28px] text-[18px]">&lt;&gt;Full-stack Developer&lt;/&gt;</h3>
                <ul className="flex md:gap-10 gap-4 md:pl-[30px] pt-8"> 
                    <GitButton />
                    <LinkButton />
                    <InstButton /> 
                </ul>
            </section>
            <section className='text-white flex flex-col p-14 pt-[300px] gap-2'>
                <h1 className='font-bold text-[30px]'>
                    About me</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel eaque quis id, ex illum ratione commodi natus accusantium laborum officia aut nam, blanditiis tenetur error vero ullam illo sint at? Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate provident quos consequuntur a dolores assumenda amet veniam recusandae eaque blanditiis quisquam deserunt ipsam, numquam eum ipsum qui nisi reprehenderit excepturi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur odio, mollitia facilis nostrum error, accusamus voluptatem doloribus, sunt aperiam perspiciatis ipsam praesentium repellendus beatae quasi temporibus deserunt ad odit. lore</p>
            </section>
        </body>
    );
};
