/**
 * Master city list used by the search form's autocomplete.
 * TO ADD A CITY: add a new string to this array. Nothing else needs to change.
 */

export interface City {
  name: string;
  state: string;
  isPopular?: boolean; // shows in "Popular Routes" style shortcuts
}

export const INDIAN_CITIES: string[] = [
  'Mumbai', 'Delhi', 'Bengaluru', 'Hyderabad', 'Chennai', 'Kolkata',
  'Pune', 'Ahmedabad', 'Jaipur', 'Surat', 'Lucknow', 'Kanpur',
  'Nagpur', 'Indore', 'Thane', 'Bhopal', 'Visakhapatnam', 'Patna',
  'Vadodara', 'Ghaziabad', 'Ludhiana', 'Agra', 'Nashik', 'Faridabad',
  'Meerut', 'Rajkot', 'Kalyan', 'Vasai-Virar', 'Varanasi', 'Srinagar',
  'Aurangabad', 'Dhanbad', 'Amritsar', 'Navi Mumbai', 'Allahabad',
  'Ranchi', 'Howrah', 'Coimbatore', 'Jabalpur', 'Gwalior', 'Vijayawada',
  'Jodhpur', 'Madurai', 'Raipur', 'Kota', 'Chandigarh', 'Guwahati',
  'Solapur', 'Hubli-Dharwad', 'Mysuru', 'Tiruchirappalli', 'Bareilly',
  'Aligarh', 'Tiruppur', 'Moradabad', 'Jalandhar', 'Bhubaneswar',
  'Salem', 'Warangal', 'Guntur', 'Bhiwandi', 'Saharanpur', 'Gorakhpur',
  'Bikaner', 'Amravati', 'Noida', 'Jamshedpur', 'Bhilai', 'Cuttack',
  'Firozabad', 'Kochi', 'Nellore', 'Bhavnagar', 'Dehradun', 'Durgapur',
  'Asansol', 'Rourkela', 'Nanded', 'Kolhapur', 'Ajmer', 'Akola',
  'Gulbarga', 'Jamnagar', 'Ujjain', 'Loni', 'Siliguri', 'Jhansi',
  'Ulhasnagar', 'Jammu', 'Sangli-Miraj', 'Mangaluru', 'Erode',
  'Belgaum', 'Ambattur', 'Tirunelveli', 'Malegaon', 'Gaya', 'Udaipur',
  'Manali', 'Shimla', 'Rishikesh', 'Haridwar', 'Goa', 'Panaji',
  'Pondicherry', 'Ooty', 'Manipal', 'Alappuzha', 'Thrissur', 'Kannur',
];