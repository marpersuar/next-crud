interface DropzoneProps {
  id: string;
  name?: string;
  accept?: string;
}

export default function Dropzone({ id, name, accept }: DropzoneProps) {
  return (
    <div className="flex items-center justify-center w-full">
      <input type="file" className="hidden" id={id} name={name} accept={accept} />;
    </div>
  );
}
