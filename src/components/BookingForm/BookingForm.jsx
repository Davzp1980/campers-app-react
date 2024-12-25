import { useForm } from 'react-hook-form';
import { useState } from 'react';
import css from './BookingForm.module.css';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import toast from 'react-hot-toast';

function BookingForm() {
  const [startDate, setStartDate] = useState(new Date());

  const ValidationSchema = yup.object().shape({
    name: yup.string().min(3).required('Must be filled in'),
    email: yup.string().email().required('Must be filled in'),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ValidationSchema),
  });

  function handleSend() {
    toast.success('Successfully sent!', {
      duration: 4000,
    });

    reset();
  }

  return (
    <>
      <div className={css.bookDiv}>
        <div className={css.descriptionDiv}>
          <p className={css.descriptionP1}>Book your campervan now</p>
          <p className={css.descriptionP2}>
            Stay connected! We are always ready to help you.
          </p>
        </div>
        <form className={css.sendForm} onSubmit={handleSubmit(handleSend)}>
          <input
            className={css.input}
            type="text"
            name="name"
            placeholder="Name*"
            {...register('name')}
          />
          <p className={css.errorMessage}>{errors.name?.message}</p>
          <input
            className={css.input}
            type="text"
            name="email"
            placeholder="Email*"
            {...register('email')}
          />
          <p>{errors.email?.message}</p>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Booking date*"
              sx={{
                '& .MuiInputBase-root': {
                  height: '60px',
                },
                '& .MuiOutlinedInput-root': {
                  border: 'none',
                  boxShadow: 'none',
                  height: '60px',
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  border: 'none',
                },
              }}
              className={css.calendar}
              selected={startDate}
              onChange={date => setStartDate(date)}
              customInput={
                <input
                  type="text"
                  placeholder="Select a date"
                  style={{
                    border: 'red',
                    padding: '10px',
                    borderRadius: '12px',
                    height: '60px',
                  }}
                />
              }
            />
          </LocalizationProvider>

          <textarea
            className={css.textarea}
            type="text"
            rows="10"
            name="Comment"
            placeholder="Comment"
            {...register('comment')}
          />
          <button className={css.sendBtn} type="submit">
            Send
          </button>
        </form>
      </div>
    </>
  );
}

export default BookingForm;
