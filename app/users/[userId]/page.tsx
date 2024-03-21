import React from 'react'  

const page = ({ params }: { params:{ userId: string } }) => {  
  return (
    <div>
      XXX: { params.userId }
    </div>
  )
}


export default page

/*
import DetailsUser from '../../components/DetailsUser';
import User from '../../interfaces/users';

export default function UserPage() {
    const router = useRouter();
    const { userId } = router.query;

    const user: User = {
        id: 1,
        uuid: 'sample-uuid',
        name: 'John Doe',
        location: 'Sample City, Sample Country',
        email: 'john@example.com',
        phone: '123-456-7890',
        cell: '098-765-4321',
        picture: 'https://example.com/image.jpg',
        friends: [] // Assuming friends data is already available
    };

    return (
      <div>
          <h1>User Profile</h1>
          
      </div>
  );
}
*/