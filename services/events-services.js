/**
 * Filter and sort events based on filter selections 
 *
 * @param {object} props
 * @param {object[]} props.events
 * @param {object} props.filters
 * @param {string} props.sortKey
 * 
 * @returns {object[]} filtered events array
 */
export function filterAndSortEvents({events, filters, sortKey}) {
  const { showResolved, searchString, domain, subdomain, owner} = filters;
  return events
    .filter(event => {
      // Filter out resolved events
      if (!showResolved && event.resolvedAt) {
        return false;
      }
      // Filter by domain
      if (!domain[event.domain]) {
        return false;
      }
      // Filter by subdomain
      if (!subdomain[event.subdomain]) {
        return false;
      }
      // Filter by user
      if (!owner[event.ownerId]) {
        return false;
      }
      // Filter by search string
      return event.description.includes(searchString);
    })
    .sort((a, b) => {
      // Resolved should be at the bottom
      if (a.resolvedAt === null) {
        return  -1;
      }
      if (a.createdAt > b.createdAt) {
        return 1;
      }
      else if (a.createdAt < b.createdAt) {
        return -1;
      }
      return a === b;
    });
}

/**
 * Get events summary, based on full events array
 *
 * @param {object[]} events
 * 
 * @returns {object} filtered events array
 */
export function getEventsSummary(events = []) {
  const summary = {
    electrical: {
      ongoing: 0,
      resolved: 0,
    },
    mechanical: {
      ongoing: 0,
      resolved: 0,
    },
    software: {
      ongoing: 0, 
      resolved: 0,
    }
  };

  events.forEach(event => {
    if (event.resolvedAt) {
      summary[event.domain].resolved++;
    }
    summary[event.domain].ongoing++;
  });


  return summary; 
}