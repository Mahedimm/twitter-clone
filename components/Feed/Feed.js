import { collection, onSnapshot, orderBy, query } from "@firebase/firestore";
import { useSession } from 'next-auth/react';
import { React, useEffect, useState } from 'react';
import { db } from '../../Firebase/firebase.config';
import Header from './Header';
import Input from './Input';
import Post from './Post';

const Feed = () => {
    const { data: session } = useSession();
    const [posts, setPosts] = useState([]);
    console.log(posts);

      // MESSY
  // useEffect(() => {
  //   const unsubscribe = onSnapshot(
  //     query(collection(db, "posts"), orderBy("timestamp", "desc")),
  //     (snapshot) => {
  //       setPosts(snapshot.docs);
  //     }
  //   );

  //   return () => {
  //     unsubscribe();
  //   };
  // }, [db]);

  // CLEAN
  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setPosts(snapshot.docs);
        }
      ),
    [db]
  );
    
    return (
        <div className="text-white flex-1 border-l border-r border-gray-700 max-w-2xl sm:ml-[73px] xl:ml-[370px]">
            <Header />
            <Input />
            <div className="pb-72">
            {posts.map((post) => 
                <Post key={post.id} id={post.id} post={post.data()}/>
            )}
            </div>
        </div>
    );
};

export default Feed;