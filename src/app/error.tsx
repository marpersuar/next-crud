'use client';

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="hero h-4/5">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h2 className="text-3xl">Algo salió mal!</h2>
          <button type="button" className="btn btn-primary my-6" onClick={() => reset()}>
            Intentar otra vez
          </button>
        </div>
      </div>
    </div>
  );
}
