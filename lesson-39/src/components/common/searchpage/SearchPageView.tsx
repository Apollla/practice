import { icons } from "../../../constants/icons";

type Post = {
  id: number;
  title: string;
  date: string;
  image: string;
  text: string;
  lesson_num: number;
  description: string;
  author: number;
};

type Props = {
  searchQuery: string;
  filteredPosts: Post[];
};

export function SearchPageView({ searchQuery, filteredPosts }: Props) {
  return (
    <div className="flex-1-screen">
      <div className="max-w-[1200px] mx-auto px-4 pt-8 pb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">
          Search results '{searchQuery}'
        </h1>

        <div className="flex flex-col">
          {filteredPosts.map((p) => ( 
            <div key={p.id} className="border-b py-6 last:border-b-0">
              <div className="flex gap-4">
                <img src={p.image} alt={p.title} className="w-28 h-28 md:w-32 md:h-32 object-cover rounded"/>
                <div className="flex-1 flex flex-col">
                  <p className="text-sm text-gray-500">{p.date}</p>
                  <h2 className="mt-1 text-lg md:text-xl font-semibold leading-snug">
                    {p.title}
                  </h2>
                </div>
              </div>

              <div className="mt-4 flex justify-between items-center">
                <div className="flex items-center gap-4 text-gray-500">
                  <button type="button" className="flex items-center gap-1 hover:text-black">
                    <img src={icons.like} alt="Like" className="w-6 h-6" />
                    <span className="text-sm">29</span>
                  </button>

                  <button type="button" className="flex items-center gap-1 hover:text-black">
                    <img src={icons.dislike} alt="Dislike" className="w-6 h-6" />
                    <span className="text-sm">3</span>
                  </button>
                </div>

                <div className="flex items-center gap-4 text-gray-500">
                  <button type="button" className="p-1 hover:text-gray-600">
                    <img src={icons.save} alt="Save" className="w-6 h-6" />
                  </button>

                  <button type="button" className="p-1 hover:text-gray-600">
                    <img src={icons.more} alt="More" className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
