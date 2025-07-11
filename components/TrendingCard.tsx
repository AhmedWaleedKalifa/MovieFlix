import { View, Text, TouchableOpacity ,Image} from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const TrendingCard = ({movie:{movie_id,title,poster_url:poster},index}:TrendingCardProps) => {
  return (
    <Link href={`/movies/${movie_id}`} asChild>
        <TouchableOpacity className='w-32 relative pl-5'>
            <Image
            source={{uri:poster}}
            className="w-32 h-48 rounded-lg"
            resizeMode="cover"
            />
        </TouchableOpacity>
    </Link>
  )
}

export default TrendingCard