export class UserSelfResponse
{
    id: number;
    username: string;
    full_name: string;
    profile_picture: string;
    bio: string;
    website: string;
    is_business: boolean;
    counts: Counts;
 }

export class Counts
{ 
    media: number;
    follows: number;
    followed_by: number;
}    