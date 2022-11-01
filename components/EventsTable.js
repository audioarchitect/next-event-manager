import { useState } from 'react';
import EventModal from 'components/EventModal'

function EventsTable({ events, loading, onSave }) {
  const [activeEvent, setActiveEvent] = useState(null);
  
  // Determine whether to show table content or loading state
  let tableContent;

  if (loading) {
    tableContent = <tr><td>Loading table data...</td></tr>
  }
  else {
    tableContent = events.map(event => {
      return (
        <tr key={event.id}>
          <td>{event.description}</td>
          <td>{event.domain}</td>
          <td>{event.subdomain}</td>
          <td>{event.owner?.name}</td>
          <td>{event.createdAt}</td>
          <td>
            {event.resolvedAt ? <div className="badge badge-success gap-2">Resolved</div>
              : <div className="badge badge-error gap-2">Ongoing</div>
            }
          </td>
          <td> 
            <label htmlFor={`event-modal-${event.id}`} className="btn btn-sm btn-outline"
              onClick={() => {
                setActiveEvent(event);
              }}
            >
              Edit
            </label>
            <EventModal id={`event-modal-${event.id}`} onSave={onSave} event={event} />
          </td>
        </tr>
      );
    });
 }

  return (
    <>
      <table className="table w-full">
        <thead>
          <tr>
            <th>Description</th>
            <th>Domain</th>
            <th>Subdomain</th>
            <th>Owner</th>
            <td>Date</td>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {tableContent}     
        </tbody>
      </table>
    </>
  );
}

export default EventsTable;