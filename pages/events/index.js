import React, { useState } from 'react';
import apiUtil from '../../utils/api-util';
import { filterAndSortEvents, getEventsSummary, getFilterObject } from '../../services/events-services';
import { availableDomains, availableSubdomains, availableUsers } from '../../utils/ui-schema'

import {
  useQuery,
  useQueryClient,
  useMutation,
} from '@tanstack/react-query';

import EventsTable from 'components/EventsTable';
import EventsSummary from '../../components/EventsSummary';
import EventModal from 'components/EventModal';
import EventFilter from '../../components/EventFilter';

function Events() {
  // Filter state
  const [filters, setFilters] = useState({
    searchString: '',
    domain: getFilterObject(availableDomains), 
    subdomain: getFilterObject(availableSubdomains), 
    owner: getFilterObject(availableUsers),
    showResolved: true,
  });

  // Create React Query cliet
  const queryClient = useQueryClient();
  
  // Set up query and mutation
  const { isLoading, error, data, isFetching } = useQuery(['events'], apiUtil.events.get);
  const newEventMutation = useMutation(apiUtil.events.create, {
    onSuccess: () => {
      queryClient.invalidateQueries('events')
    },
  });
  const updateEventMutation = useMutation(apiUtil.events.update, {
    onSuccess: () => {
      queryClient.invalidateQueries('events')
    },
  });

  // Filtered events depends on event data from server, and local filter state
  const filteredEvents = React.useMemo(() => {
    if (isLoading) return [];

    return filterAndSortEvents({events: data, filters });
  }, [data, filters]);

  // Filtered events depends on event data from server, and local filter state
  const eventsSummary = React.useMemo(() => {
    return getEventsSummary(data);
  }, [data]);

  // Event updated callback
  const onEventUpdated = (data) => {
    if (data.id) {
      console.log("edit event", data)
      updateEventMutation.mutate({...data, ownerId: parseInt(data.ownerId)});
    }
    else {
      console.log("create new event", data)
      newEventMutation.mutate({...data, ownerId: parseInt(data.ownerId)});
    }      
  }

  return (
    <div className="p-8">
      <h1 className="text-4xl flex flex-row mb-4">
        <span className="flex-1">Events Dashboard</span>
        <label htmlFor="new-event-modal" className="btn btn-primary flex-0">
          New event
        </label>
      </h1>
      
      {/* Summary of events */}
      <EventsSummary eventsSummary={eventsSummary} />

      { /* Filter section */ }
      <div className="mt-6"> 
        <EventFilter  filters={filters} onChange={(updated) => setFilters(updated)} />
      </div>
    
      {/* Events table */ }
      <div className="overflow-x-auto">
        <EventsTable events={filteredEvents} loading={isLoading} onSave={onEventUpdated} />
      </div>

      { /* Event creation/editor modal */ }
      <EventModal id="new-event-modal" event={{description: '', domain: '', subdomain: '', ownerId: null}} isNew onSave={onEventUpdated}/>
    </div>
  )
}

export default Events;