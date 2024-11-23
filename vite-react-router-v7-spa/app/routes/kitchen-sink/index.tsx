import { zodResolver } from '@hookform/resolvers/zod';
import type { ClientActionFunctionArgs } from 'react-router';
import { Form, useActionData, useLoaderData } from 'react-router';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import queryClient from '@/services/queries/queryClient';
import { toast } from '@/hooks/useToast';
import LinkButton from '@/components/ui/LinkButton';
import getValidatedFormData from '@/utils/getValidatedFormData';
import { getPostsQuery } from '@/services/queries/posts';

const formDataSchema = z.object({
  name: z.string().min(3).max(10, {
    message: 'Name must be between 3 and 10 characters',
  }),
});

type FormData = z.infer<typeof formDataSchema>;

const resolver = zodResolver(formDataSchema);

export const clientLoader = async () => {
  const posts = await queryClient.ensureQueryData(getPostsQuery());

  return posts;
};

clientLoader.hydrate = true;

export const clientAction = async ({ request }: ClientActionFunctionArgs) => {
  const { errors, data, defaultValues } = getValidatedFormData({
    formData: await request.formData(),
    schema: formDataSchema,
  });
  if (errors) {
    return { errors, defaultValues };
  }

  toast({
    title: `Hello ${data.name}!`,
  });

  return { data };
};

const KitchenSinkPage = () => {
  const loaderData = useLoaderData<typeof clientLoader>();
  const actionData = useActionData<typeof clientAction>();
  const {
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver,
    mode: 'onChange',
  });

  return (
    <div>
      <Form method="POST">
        <Input
          className="m-4"
          label="Name"
          errorMessage={errors?.name?.message || actionData?.errors?.name}
          defaultValue={actionData?.defaultValues?.name}
          {...register('name')}
        />
        <Button type="submit">{'Submit'}</Button>
      </Form>
      <ul className="grid grid-cols-2">
        {loaderData?.map(post => (
          <li key={post.id} className="mt-4 flex items-center">
            <LinkButton to={`/react-query/${post.id}`}>
              {post.title.substring(0, 4)}
            </LinkButton>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default KitchenSinkPage;
