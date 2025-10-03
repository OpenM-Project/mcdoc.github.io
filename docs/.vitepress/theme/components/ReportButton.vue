<template>
  <div class="report-button-container">
    <button 
      @click="showPopup = true" 
      class="report-button"
      :title="$t ? $t('report.Report an issue') : 'Report an issue'"
    >
      <svg class="report-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14,2 14,8 20,8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10,9 9,9 8,9"/>
      </svg>
      <span class="report-text">{{ $t ? $t('report.Report') : 'Report' }}</span>
    </button>

    <!-- Popup Modal -->
    <Teleport to="body">
      <div v-if="showPopup" class="popup-overlay" @click="closePopup">
        <div class="popup-content" @click.stop>
          <div class="popup-header">
          <h3>{{ $t ? $t('report.Report an Issue') : 'Report an Issue' }}</h3>
          <button @click="closePopup" class="close-button">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div class="popup-body">
          <form @submit.prevent="submitReport">
            <div class="form-group">
              <label for="issue-type">{{ $t ? $t('report.Issue Type') : 'Issue Type' }}:</label>
              <select id="issue-type" v-model="formData.type" required>
                <option value="">{{ $t ? $t('report.Select an issue type') : 'Select an issue type' }}</option>
                <option value="broken-link">{{ $t ? $t('report.Broken Link') : 'Broken Link' }}</option>
                <option value="incorrect-info">{{ $t ? $t('report.Incorrect Information') : 'Incorrect Information' }}</option>
                <option value="missing-content">{{ $t ? $t('report.Missing Content') : 'Missing Content' }}</option>
                <option value="malicious-link">{{ $t ? $t('report.Malicious Link') : 'Malicious Link' }}</option>
                <option value="other">{{ $t ? $t('report.Other') : 'Other' }}</option>
              </select>
            </div>

            <div class="form-group">
              <label for="issue-title">{{ $t ? $t('report.Title') : 'Title' }}:</label>
              <input 
                id="issue-title" 
                v-model="formData.title" 
                type="text" 
                :placeholder="$t ? $t('report.Enter a brief title') : 'Enter a brief title'"
                required
              />
            </div>

            <div class="form-group">
              <label for="issue-description">{{ $t ? $t('report.Description') : 'Description' }}:</label>
              <textarea 
                id="issue-description" 
                v-model="formData.description" 
                :placeholder="$t ? $t('report.Describe the issue in detail') : 'Describe the issue in detail'"
                rows="4"
                required
              ></textarea>
            </div>

            <div class="form-group">
              <label for="issue-url">{{ $t ? $t('report.URL (if applicable)') : 'URL (if applicable)' }}:</label>
              <input 
                id="issue-url" 
                v-model="formData.url" 
                type="url" 
                :placeholder="$t ? $t('report.Enter the problematic URL') : 'Enter the problematic URL'"
              />
            </div>

            <div class="form-group">
              <label for="issue-severity">{{ $t ? $t('report.Severity') : 'Severity' }}:</label>
              <select id="issue-severity" v-model="formData.severity">
                <option value="low">{{ $t ? $t('report.Low') : 'Low' }}</option>
                <option value="medium">{{ $t ? $t('report.Medium') : 'Medium' }}</option>
                <option value="high">{{ $t ? $t('report.High') : 'High' }}</option>
                <option value="critical">{{ $t ? $t('report.Critical') : 'Critical' }}</option>
              </select>
            </div>

            <div class="form-actions">
              <button type="button" @click="closePopup" class="cancel-button">
                {{ $t ? $t('report.Cancel') : 'Cancel' }}
              </button>
              <button type="submit" class="submit-button" :disabled="isSubmitting">
                <span v-if="isSubmitting">{{ $t ? $t('report.Submitting') : 'Submitting...' }}</span>
                <span v-else>{{ $t ? $t('report.Submit Report') : 'Submit Report' }}</span>
              </button>
            </div>
          </form>
        </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import { useRoute } from 'vitepress'

const route = useRoute()
const showPopup = ref(false)
const isSubmitting = ref(false)

const formData = reactive({
  type: '',
  title: '',
  description: '',
  url: '',
  severity: 'medium'
})

const closePopup = () => {
  showPopup.value = false
  // Reset form
  Object.assign(formData, {
    type: '',
    title: '',
    description: '',
    url: '',
    severity: 'medium'
  })
}

const submitReport = async () => {
  isSubmitting.value = true
  
  try {
    const repo = 'openm-project/mcdoc.github.io'
    const labels = getLabels()
    const title = encodeURIComponent(formData.title)
    const body = generateIssueBody()
    
    const issueUrl = `https://github.com/${repo}/issues/new?labels=${labels}&title=${title}&body=${encodeURIComponent(body)}`
    
    // Open GitHub issue creation page
    window.open(issueUrl, '_blank', 'noopener,noreferrer')
    
    // Show success message
    if (typeof window !== 'undefined' && (window as any).$toast) {
      (window as any).$toast.success('Report submitted successfully!')
    }
    
    closePopup()
  } catch (error) {
    console.error('Error submitting report:', error)
    if (typeof window !== 'undefined' && (window as any).$toast) {
      (window as any).$toast.error('Failed to submit report. Please try again.')
    }
  } finally {
    isSubmitting.value = false
  }
}

const getLabels = () => {
  const labels = ['bug-report']
  
  switch (formData.type) {
    case 'broken-link':
      labels.push('broken-link')
      break
    case 'incorrect-info':
      labels.push('documentation')
      break
    case 'missing-content':
      labels.push('enhancement')
      break
    case 'malicious-link':
      labels.push('security')
      break
    case 'other':
      labels.push('question')
      break
  }
  
  labels.push(`severity-${formData.severity}`)
  
  return labels.join(',')
}

const generateIssueBody = () => {
  const currentPage = typeof window !== 'undefined' ? window.location.href : route.path
  const userAgent = typeof window !== 'undefined' ? window.navigator.userAgent : 'Unknown'
  
  return `## Issue Description
${formData.description}

## Issue Type
${formData.type}

## Severity
${formData.severity}

## Additional Information
- **Current Page**: ${currentPage}
- **Reported URL**: ${formData.url || 'N/A'}
- **User Agent**: ${userAgent}
- **Reported At**: ${new Date().toISOString()}

---
*This issue was automatically generated from the MCDOC report system.*`
}
</script>

<style scoped>
.report-button-container {
  position: relative;
}

.report-button {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.375rem 0.75rem;
  background: transparent;
  color: var(--vp-c-text-2);
  border: 1px solid var(--vp-c-divider);
  border-radius: 0.375rem;
  cursor: pointer;
  font-size: 0.8125rem;
  font-weight: 500;
  transition: all 0.2s ease;
  text-decoration: none;
  margin-left: 0.5rem;
  white-space: nowrap;
}

.report-button:hover {
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  border-color: var(--vp-c-brand-1);
}

.report-icon {
  width: 1rem;
  height: 1rem;
}

.report-text {
  white-space: nowrap;
}

/* Popup Styles */
.popup-overlay {
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
  bottom: 0 !important;
  background: rgba(0, 0, 0, 0.5) !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  z-index: 99999 !important;
  padding: 1rem !important;
  width: 100vw !important;
  height: 100vh !important;
}

.popup-content {
  background: var(--vp-c-bg) !important;
  border: 1px solid var(--vp-c-divider) !important;
  border-radius: 0.75rem !important;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25) !important;
  max-width: 500px !important;
  width: 100% !important;
  max-height: 80vh !important;
  overflow-y: auto !important;
  position: relative !important;
  z-index: 100000 !important;
}

.popup-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 1.5rem 0 1.5rem;
  border-bottom: 1px solid var(--vp-c-divider);
  margin-bottom: 1.5rem;
}

.popup-header h3 {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.close-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.25rem;
  color: var(--vp-c-text-2);
  transition: all 0.2s ease;
}

.close-button:hover {
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
}

.close-button svg {
  width: 1.25rem;
  height: 1.25rem;
}

.popup-body {
  padding: 0 1.5rem 1.5rem 1.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--vp-c-text-1);
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 0.375rem;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-size: 0.875rem;
  transition: border-color 0.2s ease;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 0 0 3px rgba(var(--vp-c-brand-1-rgb), 0.1);
}

.form-group textarea {
  resize: vertical;
  min-height: 100px;
}

.form-actions {
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 2rem;
}

.cancel-button,
.submit-button {
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
}

.cancel-button {
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
}

.cancel-button:hover {
  background: var(--vp-c-bg-soft-hover);
}

.submit-button {
  background: var(--vp-c-brand-1);
  color: var(--vp-c-brand-soft);
}

.submit-button:hover:not(:disabled) {
  background: var(--vp-c-brand-2);
}

.submit-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Dark mode adjustments */
.dark .popup-content {
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
}

/* Mobile responsiveness */
@media (max-width: 640px) {
  .popup-overlay {
    padding: 0.5rem;
    align-items: flex-start;
    padding-top: 2rem;
  }
  
  .popup-content {
    max-width: none;
    border-radius: 0.5rem;
    max-height: 90vh;
  }
  
  .popup-header {
    padding: 1rem 1rem 0 1rem;
  }
  
  .popup-body {
    padding: 0 1rem 1rem 1rem;
  }
  
  .form-actions {
    flex-direction: column;
  }
  
  .cancel-button,
  .submit-button {
    width: 100%;
  }
  
  .report-button {
    margin-left: 0.25rem;
    padding: 0.25rem 0.5rem;
    font-size: 0.75rem;
  }
  
  .report-text {
    display: none;
  }
}

/* Ensure popup is always visible */
.popup-overlay {
  backdrop-filter: blur(4px);
}

.popup-content {
  animation: popupFadeIn 0.2s ease-out;
}

@keyframes popupFadeIn {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(-10px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
</style>
