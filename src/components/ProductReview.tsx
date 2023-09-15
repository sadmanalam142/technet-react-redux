import { useGetCommentsQuery, useMakeCommentMutation } from '@/redux/features/product/productApi';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { FiSend } from 'react-icons/fi';
import { ChangeEvent, MouseEvent, useState } from 'react';

interface IProps {
  id: string;
}

export default function ProductReview({id}: IProps) {

  const [text, setText] = useState<string>('');
  const [makeComment, {isLoading, isError, isSuccess}] = useMakeCommentMutation()
  const {data, isLoading: loading, error} = useGetCommentsQuery(id)

  console.log(isLoading);
  console.log(isError);
  console.log(isSuccess);

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log(text);
    const options = {
      id: id,
      data: {comment : text}
    }
    makeComment(options),
    setText('')
  };
  return (
    <div className="max-w-7xl mx-auto mt-5">
      <div className="flex gap-5 items-center">
        <Textarea className="min-h-[30px]"
        placeholder="Enter your comment"
        value={text}
        onChange={handleInputChange} />
        <Button className="rounded-full h-10 w-10 p-2 text-[25px]" onClick={handleSubmit}>
          <FiSend />
        </Button>
      </div>
      <div className="mt-10">
        {data?.comments?.map((comment: string, index: number) => (
          <div key={index} className="flex gap-3 items-center mb-5">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p>{comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
