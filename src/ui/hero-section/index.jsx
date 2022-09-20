import Image from 'next/image';

function HeroSection() {
  return (
    <div className="flex flex-col">
      <div>
        <p className="text-4xl font-extrabold ">
          Get The Equipment <br /> You Need To <br /> Succeed
        </p>
        <p className="mt-4 text-sm font-normal">
          We Offer Premium Quality Workout Equipment <br /> To Achieve Your
          Fitness Goals.
        </p>
      </div>

      <div>
        <Image
          src={'/hero.svg'}
          alt="people working out"
          height={250}
          width={250}
          layout="responsive"
        />
      </div>
    </div>
  );
}

export default HeroSection;
