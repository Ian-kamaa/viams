import { useState } from 'react';
import { FadeIn } from '@/components/FadeIn';
import { Button } from '@/components/Button';
import { ContactFormData } from '../lib/types';

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    // Gather the form data
    const formData: ContactFormData = {
      name: (event.currentTarget.elements.namedItem('name') as HTMLInputElement)?.value || '',
      email: (event.currentTarget.elements.namedItem('email') as HTMLInputElement)?.value || '',
    //   company: (event.currentTarget.elements.namedItem('company') as HTMLInputElement)?.value || '',
      phone: (event.currentTarget.elements.namedItem('phone') as HTMLInputElement)?.value || '',
      message: (event.currentTarget.elements.namedItem('message') as HTMLInputElement)?.value || '',
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage('Form submitted successfully!');
        setErrorMessage('');
      } else {
        setErrorMessage('Error submitting form');
        setSuccessMessage('');
      }
    } catch (error) {
      setErrorMessage('Error submitting form');
      setSuccessMessage('');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <FadeIn className="lg:order-last">
      <form onSubmit={handleSubmit}>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <div className="group relative z-0 transition-all focus-within:z-10">
            <input
              type="text"
              name="name"
              placeholder=" "
              className="peer block w-full border border-yellow-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-orange-950 ring-4 ring-transparent transition focus:border-orange-950 focus:outline-none focus:ring-orange-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
            />
            <label className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-orange-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-orange-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-orange-950">
              Name
            </label>
          </div>
          {/* Add similar sections for other form fields */}
        </div>
        <Button type="submit" className="mt-10" disabled={isSubmitting}>
          Submit
        </Button>
        {successMessage && <div className="text-green-500">{successMessage}</div>}
        {errorMessage && <div className="text-red-500">{errorMessage}</div>}
      </form>
    </FadeIn>
  );
}

export default ContactForm;