// import { ContactSchema } from '@/general/modules/contact-and-imprint/schemas/contact.dto';
// import { useQuery } from '@tanstack/react-query';
// import axios from 'axios';

// export function usePostContactQuery() {
//   return useQuery({
//     queryKey: ['todos'],
//     queryFn: (contact: ContactSchema) => {
//       try {
//         const response = await axios.post('http://localhost:3112/contact', contact, {
//           headers: { 'Content-Type': 'application/json' },
//           timeout: 5000, // optional
//         });
//         console.log(response.data);
//         return response.data;
//       } catch (error) {
//         if (error.response) {
//           // server responded with a status outside 2xx
//           console.error('Error status:', error.response.status);
//           console.error('Error data:', error.response.data);
//         } else {
//           console.error('Request error:', error.message);
//         }
//       }
//     },
//   });
// }
