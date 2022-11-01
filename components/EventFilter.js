import { useState } from 'react';
import { availableDomains, availableSubdomains, availableUsers } from '../utils/ui-schema'

function EventFilter({filters, onChange }) {
  
  return (
    <div className="my-4 flex flex-row flex-end">
      { /* Filter by search string */ }
      <div className="flex-1">
        <input type="text" className="input input-bordered w-full max-w-xs"
          placeholder="Search events" 
          value={filters.searchString}
          onChange={e => onChange({ ...filters, searchString: e.target.value }) }
        />
      </div>
     
      { /* Filter by selected domain type */ }
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn m-1">Domain Filter</label>
        <div tabIndex={0} className="dropdown-content menu p-3 shadow bg-base-100 rounded-box w-52">
          {
            availableDomains.map(domain => {
              return (
                <label key={domain.value} className="label cursor-pointer">
                  <span className="label-text">{domain.name}</span> 
                  <input type="checkbox" className="checkbox"
                    checked={filters.domain[domain.value]}
                    onChange={() => onChange({...filters, domain: { ...filters.domain, [domain.value]: !filters.domain[domain.value] }}) }
                  />
                </label>
              )
            })
          }
        </div>
      </div>

      { /* Filter by selected subdomain type */ }
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn m-1">Subdomain Filter</label>
        <div tabIndex={0} className="dropdown-content menu p-3 shadow bg-base-100 rounded-box w-52">
          {
            availableSubdomains.map(subdomain => {
              return (
                <label key={subdomain.value} className="label cursor-pointer">
                  <span className="label-text">{subdomain.name}</span> 
                  <input type="checkbox" className="checkbox"
                    checked={filters.subdomain[subdomain.value]}
                    onChange={() => onChange({...filters, subdomain: {
                      ...filters.subdomain, [subdomain.value]: !filters.subdomain[subdomain.value]
                    }}) }
                  />
                </label>
              )
            })
          }
        </div>
      </div>

      { /* Filter by owner */ }
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn m-1">User Filter</label>
        <div tabIndex={0} className="dropdown-content menu p-3 shadow bg-base-100 rounded-box w-52">
          {
            availableUsers.map(owner => {
              return (
                <label key={owner.id} className="label cursor-pointer">
                  <span className="label-text">{owner.name}</span> 
                  <input type="checkbox" className="checkbox"
                    checked={filters.owner[owner.id]}
                    onChange={() => onChange({...filters, owner: {
                      ...filters.owner, [owner.id]: !filters.owner[owner.id]
                    }}) }
                  />
                </label>
              )
            })
          }
        </div>
      </div>

      { /* Toggle whether to display resolved events */ }
      <div className="form-control w-52 ml-4">
        <label className="cursor-pointer label">
          <span className="label-text">Show resolved</span> 
          <input type="checkbox" className="toggle toggle-success"
            checked={filters.showResolved}
            onChange={() => onChange({...filters, showResolved: !filters.showResolved}) }
          />
        </label>
      </div>
    </div>
  );
}

export default EventFilter;