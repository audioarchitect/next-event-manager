import { availableDomains } from '../utils/ui-schema'

function EventsSummary({ eventsSummary = {} }) {  
  return (
    <div className="grid grid-cols-3 gap-4">
      {
        availableDomains.map(domain => {
          if (!eventsSummary[domain.value]) {
            return <div>nothing here</div>
          }
          const { ongoing, resolved } = eventsSummary[domain.value];
          return (
            <div key={domain.value} className="card w-64 bg-base-100 shadow-md">
              <div className="card-body">
                <h2 className="card-title">{domain.name}</h2>
                <p className="text-xl">
                  <span className="font-bold">{ongoing}</span>&nbsp;
                  ongoing events
                </p>
                <p className="text-sm">
                  <span className="font-bold">{resolved}</span>&nbsp;
                  resolved events
                </p>
              </div>
            </div>
          )
        })
      }
    </div>
  );
}

export default EventsSummary;