import { useState } from 'react'
import { availableDomains, availableSubdomains, availableUsers } from '../utils/ui-schema'

function EventModal({ id, event, isNew = false, onSave }) {
  const [eventData, setEventData] = useState(event);

  const saveEdits = () => {
    onSave(eventData);
  }

  return (
    <>
    <input type="checkbox" id={id} className="modal-toggle" />
    <div className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg mb-4">
          { isNew ? 'Create' : 'Edit'} Event
        </h3>

        { /* Event description */ }
        <input type="text" className="input input-bordered w-full max-w-xs my-2"
          placeholder="Description" 
          value={eventData.description}
          onChange={e => setEventData({...eventData, description: e.target.value}) }
        />

        { /* Select domain */}
        <div className="form-control my-2">
          <label className="input-group input-group-lg">
            <span>Domain</span>
            <select className="select select-bordered w-full max-w-xs"
              disabled={!isNew}
              value={eventData.domain}
              onChange={(e) => setEventData({...eventData, domain: e.target.value })}
            >
            <option disabled value="">Select domain</option>
            {
              availableDomains.map(domain => {
                return <option key={domain.value} value={domain.value}>{domain.name}</option>
              })
            }
          </select>
          </label>
        </div>

        { /* Select sub-domain */}
        <div className="form-control my-2">
          <label className="input-group input-group-lg">
            <span>Subdomain</span>
            <select className="select select-bordered w-full max-w-xs"
                disabled={!isNew}
                value={eventData.subdomain}
                onChange={(e) => setEventData({...eventData, subdomain: e.target.value })}
              >
              <option disabled value="">Select subdomain</option>
              {
                availableSubdomains.map(subdomain => {
                  return <option key={subdomain.value} value={subdomain.value}>{subdomain.name}</option>
                })
              }
            </select>
          </label>
        </div>

        { /* Select owner */}
        <div className="form-control my-2">
          <label className="input-group input-group-lg">
            <span>Owner</span>
            <select className="select select-bordered w-full max-w-xs"
                disabled={!isNew}
                value={eventData.ownerId}
                onChange={(e) => setEventData({...eventData, ownerId: e.target.value })}
              >
              <option disabled value="">Select owner</option>
              {
                availableUsers.map(user => {
                  return <option key={user.id} value={user.id}>{user.name}</option>
                })
              }
            </select>
          </label>
        </div>

        { /* Don't show resolved checkbox on event creation */
          !isNew ? (
            <div className="form-control">
              <label className="cursor-pointer label">
                <span className="label-text">Mark as resolved</span>
                <input type="checkbox" className="checkbox checkbox-success"
                  checked={!!eventData.resolvedAt}
                  onChange={() => 
                    setEventData({ ...eventData, resolvedAt: eventData.resolvedAt ? null : new Date()})
                  }
                />
              </label>
            </div>
          ) : null
        }
   
        { /* Submit/cancel buttons */ }
        <div className="modal-action">
          <label htmlFor={id} className="btn btn-error">
            Cancel
          </label>
          <label htmlFor={id} className="btn btn-success"
            onClick={saveEdits}>
            Submit
          </label>
        </div>
      </div>
    </div>  
    </>
  );
}

export default EventModal;