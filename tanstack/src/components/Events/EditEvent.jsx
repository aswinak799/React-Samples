import { Link, useNavigate, useParams } from 'react-router-dom';

import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
import { useMutation, useQuery } from '@tanstack/react-query';
import { fetchEvent, queryClient, updateEvent } from '../utils/http.js';
import LoadingIndicator from '../UI/LoadingIndicator.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';

export default function EditEvent() {
  const navigate = useNavigate();
  const params = useParams();

  const { data, isPending, isError, error } = useQuery({
    queryKey: ['events', { id: params.id}],
    queryFn: ({signal}) => fetchEvent({ signal, id: params.id })
  })

  const {
    mutate,
    isPending: isPendingEdit,
    isError: isErrorEdit,
    error: editError,
  } = useMutation({
    mutationFn: updateEvent,
    onMutate: async ({event}) => {
      await queryClient.cancelQueries({queryKey: ['events', { id: params.id }]});
      const previousEvent = queryClient.getQueryData(['events', { id: params.id }])
      queryClient.setQueryData(['events', { id: params.id }], event);
      return { previousEvent }
    },
    onError: (error,data, cotext) => {
      queryClient.setQueryData(['events', { id: params.id }], cotext.previousEvent);

    },
    onSettled: () => {
      queryClient.invalidateQueries({queryKey: ['events', { id: params.id }]})
    }
  });

  function handleSubmit(formData) {
    mutate({ id: params.id, event: formData })
    navigate('../');

  }

  function handleClose() {
    navigate('../');
  }
  let content;
  if (isPending) {
    content = <div className='center'>
      <LoadingIndicator/>
    </div>
  }
  if(isError){
    content = <>
    <ErrorBlock title="Faild to load event." message={error?.info?.message || 'Faild to load event ...!'}/>
    <div className="form-actions">
      <Link to='../' className='button'>
        Okey
      </Link>
    </div>
    </>
  }

  if (data) {
    content = (
      <EventForm inputData={data} onSubmit={handleSubmit}>
        <Link to="../" className="button-text">
          Cancel
        </Link>
        <button type="submit" className="button">
          Update
        </button>
      </EventForm>
    )
  }

  return (
    <Modal onClose={handleClose}>
      {content}
    </Modal>
  );
}


